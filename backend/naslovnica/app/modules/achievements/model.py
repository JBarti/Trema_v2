from flask import jsonify
from datetime import datetime
from dataclasses import dataclass, asdict


@dataclass
class Achievement:
    image: str
    title: str
    body: str
    tldr: str
    date: str
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

    def str_to_date(self):
        lst_date = self.date.split("/")
        try:
            self.date = datetime(int(lst_date[2]), int(lst_date[1]), int(lst_date[0]))
            return self.date
        except (ValueError, IndexError):
            return None

    def date_to_str(self):
        self.date = self.date.strftime("%d/%m/%Y")
        return self.date
