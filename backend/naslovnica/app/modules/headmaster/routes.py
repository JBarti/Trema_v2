from app import mongo
from .model import Headmaster
from .controller import HeadmasterController
from flask import Blueprint, abort, request

headmaster_bp = Blueprint("headmaster_api", __name__, url_prefix="/service/headmaster")

controller = HeadmasterController(mongo.db)


@headmaster_bp.route("/test")
def test():
    return "<h1>This route works.</h1>"


@headmaster_bp.route("/get")
def get():
    resp = controller.get_data()
    return resp


@headmaster_bp.route("/post", methods=["POST"])
def post():
    data = request.get_json()
    resp = controller.post_data(data, Headmaster)
    return resp


@headmaster_bp.route("/put", methods=["PUT"])
def put():
    data = request.get_json()
    resp = controller.put_data(data, Headmaster)
    return resp


@headmaster_bp.route("/delete", methods=["DELETE"])
def delete():
    data = request.get_json()
    resp = controller.delete_data(data, Headmaster)
    return resp
