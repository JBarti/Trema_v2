from .model import Subject
from ..controller import Controller


class SubjectController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "subject"}))
