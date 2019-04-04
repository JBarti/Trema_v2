from datetime import datetime


def conv_to_date(str_date):
    try:
        date = str_date.split("/")
        date_obj = datetime(int(date[2]), int(date[1]), int(date[0]))
        return date_obj
    except ValueError:
        return None