from flask import jsonify, abort
from .model import Award
from ..controller import Controller


class AwardController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "award"}))
