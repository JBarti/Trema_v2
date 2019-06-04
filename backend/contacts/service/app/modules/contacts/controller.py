from os import environ
from .model import Contact
from datetime import datetime
from dataclasses import asdict
from flask import abort, jsonify
from bson import ObjectId, errors


class ContactController:
    def __init__(self, mongo):  # mongo --> type(PyMongo.db)
        self.db = mongo.contacts

    def post_data(self, data):
        try:
            new_contact = Contact(**data)
            self.db.insert_one(new_contact.to_dict())
            return jsonify(data)

        except TypeError:
            return abort(400, "Submitted payload does not meet the right parametres.")

    def put_data(self, data):
        try:
            new_contact = Contact(**data)

            if "_id" not in data:
                return abort(400, "Submitted payload does not have an id.")

            status = self.db.update_one(
                {"_id": ObjectId(data["_id"])}, {"$set": new_contact.to_dict()}
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
        return self.jsonify_query(self.db.find())

    def jsonify_query(self, query):
        contacts = [Contact(**contact) for contact in query]
        for contact in contacts:
            contact._id = str(contact._id)
        return jsonify([asdict(contact) for contact in contacts])
