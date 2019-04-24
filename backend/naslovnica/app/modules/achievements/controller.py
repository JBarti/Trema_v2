from .model import Achievement
from datetime import datetime
from flask import abort, jsonify
from bson import ObjectId, errors

class AchievementController:
    def __init__(self, mongo):
        self.db = mongo.headpage
    
    def post_data(self, data):
        try:
            new_achieve = Achievement(**data)
            if not new_achieve.str_to_date():
                return abort(400, "Date format is not correct.")
            self.db.insert_one(new_achieve.to_dict())
            new_achieve.date_to_str()
            return jsonify(data)
        except:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data):
        try:
            new_achieve = Achievement(**data)

            if not new_achieve.str_to_date():
                return abort(400, "Date format is not correct.")
            if "_id" not in data:
                return abort(400, "Submitted payload does not have an id.")

            status = self.db.update_one(
                {"_id": ObjectId(data["_id"])}, {"$set": new_achieve.to_dict()}
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
    achievements = [Achievement(**achieve) for achieve in query]
    for achieve in achievements:
        achieve.date_to_str()
        achieve._id = str(achieve._id)