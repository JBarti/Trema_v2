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
    APP.permanent_session_lifetime = timedelta(minutes=5)


@APP.route("/login", methods=["POST"])
def login():
    if "id" in session:
        return abort(400, "You are already logged in.")
    data = request.get_json()
    check = controller.authenticate(data)
    if not check:
        return abort(400, "No data matches")
    session["id"] = uuid4().bytes
    return "Logged in."


@APP.route("/register")
def register():
    mongo.db.users.delete_many({})
    from werkzeug.security import generate_password_hash

    mongo.db.users.insert_one(
        {
            "email": "test@test",
            "password": generate_password_hash("password", method="sha256"),
        }
    )
    return "registered"


@APP.route("/logout")
@login_required
def logout():
    session.pop("id")
    return "Logged out"


if __name__ == "__main__":
    from routes import news_bp, pymgur_bp

    APP.register_blueprint(news_bp)
    APP.register_blueprint(pymgur_bp)
    APP.run(host="0.0.0.0")
