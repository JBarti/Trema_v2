FROM python:3.6-alpine

COPY ./service/requirements.txt /service/requirements.txt
WORKDIR /service

RUN pip install -r requirements.txt

COPY ./service /service

CMD [ "gunicorn", "-b", "0.0.0.0:5000", "wsgi:APP" ]
