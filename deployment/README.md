# Deploying tdurtschi-web

This deploy script assumes the target is a folder on a remote ftp server.

Requirements:
    * `deployment/deploy.env` file for environment config (see `deploy.env.sample`)
    * Docker is installed and running

Instructions for deploy:
    * Run `deployment/deploy-docker.sh`. This will run the deployment script inside a docker container.