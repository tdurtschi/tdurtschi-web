#! /bin/bash

set -e

install_dependencies() {
    apk add --no-cache ncftp
}

setup_environment() {
    source /resource-tdurtschi-web/deployment/deploy.env 
}

do_static_upload() {
    STATIC_ROOT="resource-tdurtschi-web/out/*"

    ncftpput -R -v -u $FTP_USER -p $FTP_PASS $FTP_URL $FTP_TARGET_DIRECTORY $STATIC_ROOT
}

main() {
    install_dependencies
    setup_environment
    do_static_upload

    echo "Success!"
}

main
