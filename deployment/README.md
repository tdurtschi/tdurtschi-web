How to deploy:

Requirements:
    * Run `yarn build` to create assets
    * `deployment/deploy.env` file to export FTP info as environment variables
    * Docker

Run `deployment/deploy-docker.sh`. This will run the deployment script inside a docker container.