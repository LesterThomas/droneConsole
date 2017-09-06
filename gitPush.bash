#!/bin/bash


echo "Copying to docker"
cp -r app ../DroneRESTAPI/APIServer/static

echo "Committing to GitHub"

git add .
git commit -m "$1"
git push

