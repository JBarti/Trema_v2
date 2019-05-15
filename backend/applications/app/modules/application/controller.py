from os import environ
from .model import Application
from datetime import datetime
from dataclasses import asdict
from flask import abort, jsonify
from bson import ObjectId, errors


class ApplicationController:
    def __init__(self, mongo):  # mongo --> type(PyMongo.db)
        self.db = mongo.applications

    def post_data(self, data):
        try:
            new_application = Application(**data)
            if not new_application.str_to_date():
                return abort(400, "Date format is not correct.")

            self.db.insert_one(new_application.to_dict())
            new_application.date_to_str()
            return jsonify(data)

        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data):
        try:
            new_application = Application(**data)

            if not new_application.str_to_date():
                return abort(400, "Date format is not correct.")
            if "_id" not in data:
                return abort(400, "Submitted payload does not have an id.")

            status = self.db.update_one(
                {"_id": ObjectId(data["_id"])}, {"$set": new_application.to_dict()}
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
        return self.jsonify_query(self.db.find().sort("date", -1))


    def conv_to_date(self, str_date):
        try:
            date = str_date.split("/")
            date_obj = datetime(int(date[2]), int(date[1]), int(date[0]))
            return date_obj
        except (ValueError, IndexError):
            return None


    def jsonify_query(self, query):
        applications = [Application(**application) for application in query]
        for application in applications:
            application.date_to_str()
            application._id = str(application._id)

        return jsonify([asdict(application) for application in applications])
