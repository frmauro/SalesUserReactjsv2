#!/bin/bash
########################################################

## Shell Script to Build Docker Image and run.   

########################################################


result=$( docker images -q salesuserreact )
if [[ -n "$result" ]]; then
echo "image exists"
 docker rmi -f salesuserreact
else
echo "No such image"
fi

echo "build the docker image"
echo "built docker images and proceeding to delete existing container"

result=$( docker ps -q -f name=salesuserreact )
if [[ $? -eq 0 ]]; then
echo "Container exists"
 docker container rm -f salesuserreact
echo "Deleted the existing docker container"
else
echo "No such container"
fi

cp -a /home/francisco/estudos/azuredevops/myagent/_work/11/s/.  /home/francisco/estudos/azuredevops/myagent/_work/r10/a/

docker build -t salesuserreact .

echo "built docker images and proceeding to delete existing container"
echo "Deploying the updated container"

docker run --name salesuserreact -d -p 3000:3000 --link apigetway salesuserreact

echo "Deploying the container"