from dataclasses import dataclass, asdict, fields
import pprint


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

    def check_data(self):
        for field in fields(self):
            if not field.type is str:
                return False
        return True
