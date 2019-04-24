import requests
from os import environ
from .model import Post
from bson import errors
from datetime import datetime
from dataclasses import asdict
from flask import abort, jsonify
from bson import ObjectId, json_util


class NewsController:
    def __init__(self, mongo):  # mongo --> type(PyMongo.db)
        self.db = mongo.news

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

            return jsonify_query(query)

        return jsonify_query(self.db.find().sort("date", -1).limit(5))


def conv_to_date(str_date):
    try:
        date = str_date.split("/")
        date_obj = datetime(int(date[2]), int(date[1]), int(date[0]))
        return date_obj
    except (ValueError, IndexError):
        return None


def jsonify_query(query):
    news = [Post(**post) for post in query]
    for post in news:
        post.date_to_str()
        post._id = str(post._id)

    return jsonify([asdict(post) for post in news])