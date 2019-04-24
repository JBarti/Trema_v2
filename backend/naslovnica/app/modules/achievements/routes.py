from app import mongo
from flask import Blueprint, abort, request
from .controller import AchievementController

achievements_bp = Blueprint("achievements_api", __name__, url_prefix="/service/achievements")

controller = AchievementController(mongo.db)

@achievements_bp.route("/test")
def test():
    return "<h1>The test route works</h1>"

@achievements_bp.route("/get")
def get():
    args = request.args
    resp = controller.get_data(args)
    return resp


@achievements_bp.route("/post", methods=["POST"])
def post():
    data = request.get_json()
    resp = controller.post_data(data)
    return resp


@achievements_bp.route("/put", methods=["PUT"])
def put():
    data = request.get_json()
    resp = controller.put_data(data)
    return resp


@achievements_bp.route("/delete", methods=["DELETE"])
def delete():
    data = request.get_json()
    resp = controller.delete_data(data)
    return resp

