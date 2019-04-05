from datetime import datetime
from flask import jsonify
from .model import Post
from dataclasses import asdict


def conv_to_date(str_date):
    try:
        date = str_date.split("/")
        date_obj = datetime(int(date[2]), int(date[1]), int(date[0]))
        return date_obj
    except (ValueError, IndexError):
        return None


def jsonify_query(query):
    news = [Post(**post) for post in query]
    for post in news:
        post.date_to_str()
        post._id = str(post._id)

    return jsonify([asdict(post) for post in news])
