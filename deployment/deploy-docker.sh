#!/bin/bash
set -x

# set working directory to project root
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"
cd ..

docker run -it -v $(pwd):/resource-tdurtschi-web frolvlad/alpine-bash /bin/bash /resource-tdurtschi-web/deployment/deploy.sh