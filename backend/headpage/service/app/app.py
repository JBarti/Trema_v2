from flask_cors import CORS
from flask_pymongo import PyMongo
from flask import Flask, request, abort
from .config import dev_config, pro_config
from .auth import authorize
from .modules import (
    Achievement,
    AchievementController,
    Headmaster,
    HeadmasterController,
    College,
    CollegeController,
    Link,
    LinkController,
    Subject,
    SubjectController,
)

app = Flask(__name__)
dev_config(app)

mongo = PyMongo(app)

CORS(app)

controllers = {
    "achievement": AchievementController(mongo.db, Achievement),
    "college": CollegeController(mongo.db, College),
    "headmaster": HeadmasterController(mongo.db, Headmaster),
    "subject": SubjectController(mongo.db, Subject),
    "link": LinkController(mongo.db, Link),
}


def get_controller(model):
    res = controllers.get(model, None)
    return res


@app.route("/head/")
def test():
    return "This is a test route."


@app.route("/head/<model>")
def get(model):
    controller = get_controller(model)
    if not controller:
        return abort(400, "Unknown model type.")
    resp = controller.get_data()
    return resp


@app.route("/head/<model>", methods=["POST"])
@authorize
def post(model):
    controller = get_controller(model)
    if not controller:
        return abort(400, "Unknown model type.")
    data = request.get_json()
    resp = controller.post_data(data)
    return resp


@app.route("/head/<model>", methods=["PUT"])
@authorize
def put(model):
    controller = get_controller(model)
    if not controller:
        return abort(400, "Unknown model type.")
    data = request.get_json()
    resp = controller.put_data(data)
    return resp


@app.route("/head/<model>", methods=["DELETE"])
@authorize
def delete(model):
    controller = get_controller(model)
    if not controller:
        return abort(400, "Unknown model type.")
    data = request.get_json()
    resp = controller.delete_data(data)
    return resp


if __name__ == "__main__":
    app.run(host="0.0.0.0")
