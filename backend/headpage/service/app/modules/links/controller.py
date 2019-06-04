from .model import Link
from ..controller import Controller


class LinkController(Controller):
    def get_data(self):
        return self.jsonify_query(self.db.find({"model": "link"}))
