import requests
from uuid import uuid4
from flask_cors import CORS
from datetime import timedelta
from flask_pymongo import PyMongo
from .modules import UsersController
from .config import dev_config, pro_config
from flask import Flask, request, abort, session
from .auth import authorize, refresh_cache, delete_cache, redis_check

APP = Flask(__name__)
dev_config(APP)

mongo = PyMongo(APP)
CORS(APP)

controller = UsersController(mongo.db)


@APP.route("/users/login", methods=["POST"])
def login():
    if "id" in session:
        value = redis_check(session["id"])
        if value:
            return abort(400, "You are already logged in.")
    data = request.get_json()
    check = controller.authenticate(data)
    if not check:
        return abort(400, "No data matches")
    id = str(uuid4().bytes)
    refresh_cache(id, data["email"])
    session["id"] = id
    session["email"] = data["email"]
    return "Logged in."


@APP.route("/users/adduser", methods=["POST"])
@authorize
def register():
    data = request.get_json()
    res = controller.add_user(data)
    return res


@APP.route("/users/removeuser", methods=["DELETE"])
@authorize
def remove():
    data = request.get_json()
    res = controller.delete_user(data)
    return res


@APP.route("/users/getusers")
@authorize
def get_users():
    res = controller.get_users()
    return res


@APP.route("/users/logout")
@authorize
def logout():
    if "id" in session:
        delete_cache(session["id"])
        session.pop("id")
    return "Logged out"


if __name__ == "__main__":
    APP.run(host="0.0.0.0")
