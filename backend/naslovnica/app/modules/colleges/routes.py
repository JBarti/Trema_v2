from app import mongo
from .model import College
from .controller import CollegeController
from flask import Blueprint, abort, request

colleges_bp = Blueprint("colleges_api", __name__, url_prefix="/service/colleges")

controller = CollegeController(mongo.db)


@colleges_bp.route("/test")
def test():
    return "<h1>This route works.</h1>"


@colleges_bp.route("/get")
def get():
    resp = controller.get_data()
    return resp


@colleges_bp.route("/post", methods=["POST"])
def post():
    data = request.get_json()
    resp = controller.post_data(data, College)
    return resp


@colleges_bp.route("/put", methods=["PUT"])
def put():
    data = request.get_json()
    resp = controller.put_data(data, College)
    return resp


@colleges_bp.route("/delete", methods=["DELETE"])
def delete():
    data = request.get_json()
    resp = controller.delete_data(data, College)
    return resp
