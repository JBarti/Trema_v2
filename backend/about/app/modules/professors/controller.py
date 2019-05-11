from flask import jsonify, abort
from .model import Professor
from ..controller import Controller


class ProfessorController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "professor"}))
