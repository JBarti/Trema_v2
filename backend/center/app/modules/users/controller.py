from flask import abort, jsonify, request, session
from .model import User
from werkzeug.security import generate_password_hash, check_password_hash


class UsersController:
    def __init__(self, db):
        self.db = db.users

    def authenticate(self, data):
        try:
            password = data["password"]
            user = self._get_user(data)
            if not user or not check_password_hash(user.password, password):
                return abort(401, "There is no user with the credentials entered.")
            return user.to_dict()
        except KeyError:
            return abort(400, "Data does not have a password.")

    def add_user(self, data):
        try:
            user = User(**data)
            user_dct = user.to_dict()

            user_dct["password"] = generate_password_hash(
                user_dct["password"], method="sha256"
            )

            res = self._get_user(user_dct)

            if res is None:
                self.db.insert_one(user_dct)
                user_dct.pop("_id")
                user_dct.pop("password")
                return jsonify(user_dct)

            return res if type(res) is not User else abort(400, "User already exists.")

        except KeyError:
            return abort(400, "Missing password.")

    def delete_user(self, data):
        try:
            email = data["email"]
            if email == session["email"]:
                return abort(
                    400, "Cannot delete user in session (Cannot delete yourself)."
                )
            result = self.db.delete_one({"email": email})
            if result.deleted_count == 1:
                return jsonify(data)
        except KeyError:
            return abort(400, "Missing data to delete user.")
        return abort(400, "No user found.")

    def get_users(self):
        query = self.db.find({})
        users = [
            {"email": user["email"]}
            for user in query
            if user["email"] != session["email"]
        ]
        return jsonify(users)

    def _get_user(self, data):
        try:
            email = data["email"]
            res = self.db.find_one({"email": email})
            if res:
                res.pop("_id")
                return User(**res)
            return None
        except KeyError:
            return abort(400, "Data does not have an email.")
