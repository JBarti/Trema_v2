#!/bin/bash

pipenv run pipenv_to_requirements -f
sudo docker build -t trema_novosti .