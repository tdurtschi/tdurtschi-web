#! /bin/bash
set -x -e

PROJECT_ROOT="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )"
PROJECT_TARGET_DIR="/resource-tdurtschi-web"

run_deploy_from_docker() {
    docker run -it -v $PROJECT_ROOT:$PROJECT_TARGET_DIR \
        frolvlad/alpine-bash \
        /bin/bash $PROJECT_TARGET_DIR/deployment/deploy.sh
}

cd $PROJECT_ROOT
yarn build
yarn cypress
run_deploy_from_docker