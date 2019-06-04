from dataclasses import dataclass, asdict, fields
from flask import jsonify
from datetime import datetime


@dataclass
class Info:
    name: str
    file: str
    _id: str = ""

    def to_dict(self):
        data = asdict(self)
        data.pop("_id", None)
        return data

    def to_resp(self):
        data = asdict(self)
        for key in data.keys():
            data[key] = str(data[key])
        return jsonify(data)
