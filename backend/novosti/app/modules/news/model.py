from dataclasses import dataclass, asdict, fields
from flask import jsonify


@dataclass
class Post:
    _id: str = ""
    title: str
    body: str
    tldr: str
    image: str
    date: str
    author: str

    def to_dict(self):
        return asdict(self)

    def to_resp(self):
        data = asdict(self)
        for key, item in data:
            data[key] = str(item)
        return jsonify(data)
