from flask import jsonify
from datetime import datetime
from dataclasses import dataclass, asdict


@dataclass
class Achievement:
    file: str
    title: str
    body: str
    _id: str = ""

    def to_dict(self):
        data = asdict(self)
        data.pop("_id", None)
        data["model"] = "achievement"
        return data

    def to_resp(self):
        data = asdict(self)
        for key in data.keys():
            data[key] = str(data[key])
        return jsonify(data)
