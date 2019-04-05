from dataclasses import dataclass, asdict
from flask_login import UserMixin


@dataclass
class User(UserMixin):
    email: str
    password: str

    def to_dict(self):
        return asdict(self)
