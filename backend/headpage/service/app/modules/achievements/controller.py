from flask import jsonify, abort
from .model import Achievement
from ..controller import Controller


class AchievementController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "achievement"}))
