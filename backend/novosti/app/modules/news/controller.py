from flask import abort, jsonify
from model import Post


class NewsController:
    def __init__(self, mongo):  # mongo --> type(PyMongo.db)
        self.db = mongo.news

    def post_data(self, data):
        try:
            new_post = Post(**data)
            self.db.insert_one(new_post.to_dict())
            return new_post.to_resp()
        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data):
        try:
            new_post = Post(**data)
            if not new_post._id:
                return abort(400, "Submitted payload does not have an id.")

            status = self.db.update_one(
                {"_id": new_post._id}, {"$set": new_post.to_dict()}
            )
            if not status.acknowledged:
                return abort(400, "The submitted id does not exist.")

            return new_post.to_resp()
        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def delete_data(self, data):
        try:
            status = self.db.delete_one(data["_id"])
            if not status.acknowledged:
                return abort(400, "The submitted id does not exist.")

            return jsonify(data)
        except KeyError:
            return abort(400, "Submitted payload does not have an id.")

    def get_data(self, data):
        pass
