from datetime import timedelta
from flask import Flask, request, abort, session
from flask_cors import CORS
from flask_pymongo import PyMongo
from config import dev_config, pro_config
from modules import UsersController
from uuid import uuid4
from routes import login_required
import requests

APP = Flask(__name__)
dev_config(APP)

mongo = PyMongo(APP)
CORS(APP)

controller = UsersController(mongo.db)


@APP.before_request
def make_session_permanent():
    session.permanent = True
    APP.permanent_session_lifetime = timedelta(minutes=10)


@APP.route("/login", methods=["POST"])
def login():
    if "id" in session:
        return abort(400, "You are already logged in.")
    data = request.get_json()
    check = controller.authenticate(data)
    if not check:
        return abort(400, "No data matches")
    session["id"] = uuid4().bytes
    session["email"] = data["email"]
    return "Logged in."


@APP.route("/adduser", methods=["POST"])
@login_required
def register():
    data = request.get_json()
    res = controller.add_user(data)
    return res


@APP.route("/removeuser", methods=["DELETE"])
@login_required
def remove():
    data = request.get_json()
    res = controller.delete_user(data)
    return res


@APP.route("/getusers")
@login_required
def get_users():
    res = controller.get_users()
    return res


@APP.route("/logout")
@login_required
def logout():
    session.pop("id")
    return "Logged out"


if __name__ == "__main__":
    from routes import news_bp, fileman_bp, head_bp, about_bp
    
    APP.register_blueprint(news_bp)
    APP.register_blueprint(about_bp)
    APP.register_blueprint(head_bp)
    APP.register_blueprint(fileman_bp)
    APP.run(host="0.0.0.0")
