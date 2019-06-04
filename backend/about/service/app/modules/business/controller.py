from flask import jsonify, abort
from .model import Business
from ..controller import Controller


class BusinessController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "business"}))
