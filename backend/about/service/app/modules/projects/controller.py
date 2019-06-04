from flask import jsonify, abort
from .model import Project
from ..controller import Controller


class ProjectController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "project"}))
