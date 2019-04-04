from flask import abort, jsonify
from .model import Post
from bson import ObjectId, json_util
from bson import errors
from dataclasses import asdict
from .utilities import conv_to_date
from os import environ
import requests


class NewsController:
    def __init__(self, mongo):  # mongo --> type(PyMongo.db)
        self.db = mongo.news

    def handle_image(self, image):
        image.seek(0)
        pymgur_host = environ.get("PYMGUR")
        res = requests.post(
            f"http://{pymgur_host}:5000/",
            files={"img": (image.filename, image.stream, image.mimetype)},
        )
        return res

    def post_data(self, data):
        try:
            new_post = Post(**data)
            if not new_post.str_to_date():
                return abort(400, "Date format is not correct.")

            self.db.insert_one(new_post.to_dict())
            new_post.date_to_str()
            return jsonify(data)

        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data):
        try:
            new_post = Post(**data)

            if not new_post.str_to_date():
                return abort(400, "Date format is not correct.")
            if "_id" not in data:
                return abort(400, "Submitted payload does not have an id.")

            status = self.db.update_one(
                {"_id": ObjectId(data["_id"])}, {"$set": new_post.to_dict()}
            )
            if status.matched_count == 0:
                return abort(400, "The submitted id does not exist.")
            return jsonify(data)

        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def delete_data(self, data):
        try:
            status = self.db.delete_one({"_id": ObjectId(data["_id"])})

            if status.deleted_count == 0:
                return abort(400, "The submitted id does not exist.")

            return jsonify(data["_id"])

        except (KeyError, errors.InvalidId):
            return abort(
                400, "Submitted payload does not have a valid id or no id at all."
            )

    def get_data(self, args):

        if "gt" in args and "lt" in args:
            gt = conv_to_date(args["gt"])
            lt = conv_to_date(args["lt"])

            if not (gt and lt):
                return abort(400, "Invalid arguments.")

            query = self.db.find({"date": {"$gt": gt, "$lt": lt}})
            news = [Post(**post) for post in query]
            for post in news:
                post.date = post.date_to_str()
                post._id = str(post._id)

            return jsonify([asdict(post) for post in news])
        return jsonify
