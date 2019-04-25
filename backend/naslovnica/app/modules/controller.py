from datetime import datetime
from flask import abort, jsonify
from bson import ObjectId, errors


class Controller:
    def __init__(self, mongo):
        self.db = mongo.headpage

    def post_data(self, data, Obj):
        try:
            obj = Obj(**data)
            if (hasattr(obj, "date")) and (not obj.str_to_date()):
                return abort(400, "Date format is not correct.")
            self.db.insert_one(obj.to_dict())
            obj.date_to_str()
            return jsonify(data)
        except:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data, Obj):
        try:
            obj = Obj(**data)

            if (hasattr(obj, "date")) and (not obj.str_to_date()):
                return abort(400, "Date format is not correct.")
            if "_id" not in data:
                return abort(400, "Submitted payload does not have an id.")

            status = self.db.update_one(
                {"_id": ObjectId(data["_id"])}, {"$set": obj.to_dict()}
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

    def conv_to_date(self, str_date):
        try:
            date = str_date.split("/")
            date_obj = datetime(int(date[2]), int(date[1]), int(date[0]))
            return date_obj
        except (ValueError, IndexError):
            return None

    def jsonify_query(self, query, Obj):
        objs = [Obj(**obj) for obj in query]
        for obj in objs:
            if hasattr(obj, "date"):
                obj.date_to_str()
            obj._id = str(obj._id)
