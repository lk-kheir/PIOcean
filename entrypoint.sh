#!/bin/bash


echo "Preparing Backend"

echo "Creaing virtual env and installing dependencies"

python3 -m venv .venv


source .venv/bin/activate

pip3  install -r requirements.txt

echo "done"
