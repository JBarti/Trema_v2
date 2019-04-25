from flask import abort
from .model import Achievement
from ..controller import Controller


class AchievementController(Controller):
    def get_data(self, args):

        if "gt" in args and "lt" in args:
            gt = self.conv_to_date(args["gt"])
            lt = self.conv_to_date(args["lt"])

            if not (gt and lt):
                return abort(400, "Invalid arguments.")

            query = self.db.find({"date": {"$gt": gt, "$lt": lt}})

            return self.jsonify_query(query, Achievement)

        return self.jsonify_query(self.db.find().sort("date", -1).limit(5), Achievement)
