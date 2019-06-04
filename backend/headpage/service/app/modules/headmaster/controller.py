from flask import jsonify
from .model import Headmaster
from ..controller import Controller


class HeadmasterController(Controller):
    def get_data(self):
        return self.jsonify_bson(self.db.find_one({"model": "headmaster"}))
