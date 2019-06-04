from os import environ
from redis import Redis
from flask import session
from functools import wraps

redis_host = environ.get("REDIS")
redis_port = 6379

red = Redis(host=redis_host, port=redis_port)


def authorize(f):
    @wraps(f)
    def wrapped_func(*args, **kwargs):
        if "id" in session:
            value = redis_check(session["id"])
            if value:
                refresh_cache(session["id"], value)
                return f(*args, **kwargs)
        return "You are not signed in. Please sign in."

    return wrapped_func


def redis_check(sess_id):
    value = red.get(sess_id)
    return value


def refresh_cache(id, email):
    red.setex(id, 60 * 15, email)
    return None


def delete_cache(data):
    red.delete(data)
    return None
