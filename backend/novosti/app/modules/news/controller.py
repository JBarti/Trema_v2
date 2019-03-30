from flask import abort, jsonify
from .model import Post
from bson import ObjectId, json_util
from .utilities import conv_to_date


class NewsController:
    def __init__(self, mongo):  # mongo --> type(PyMongo.db)
        self.db = mongo.news

    def post_data(self, data):
        try:
            new_post = Post(**data)
            if not new_post.str_to_date():
                return abort(400, "Date format is not correct.")

            res = self.db.insert_one(new_post.to_dict())
            new_post.date_to_str()
            new_post._id = res.inserted_id
            return new_post.to_resp()

        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data):
        try:
            new_post = Post(**data)

            if not new_post.str_to_date():
                return abort(400, "Date format is not correct.")
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
            status = self.db.delete_one({"_id": ObjectId(data["_id"])})

            if not status.acknowledged:
                return abort(400, "The submitted id does not exist.")

            return jsonify(data["_id"])

        except KeyError:
            return abort(400, "Submitted payload does not have an id.")

    def get_data(self, args):
        keys = args.keys()

        if all(elem in ["gt", "lt"] for elem in keys):
            gt = conv_to_date(args["gt"])
            lt = conv_to_date(args["lt"])
            if not (gt and lt):
                return abort(400, "Invalid arguments.")
            query = self.db.find({"date": {"$gt": gt, "$lt": lt}})
            news = [Post(**post) for post in query]
            for post in news:
                post.date = post.date_to_str()
                post._id = str(post._id)

            return jsonify([post.to_dict() for post in news])

