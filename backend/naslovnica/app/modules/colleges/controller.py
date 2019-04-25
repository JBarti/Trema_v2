from .model import College
from ..controller import Controller


class CollegeController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find(), College)
