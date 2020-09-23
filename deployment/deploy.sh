#! /bin/bash

set -e

install_dependencies() {
    apk add --no-cache ncftp
}

setup_environment() {
    source /resource-tdurtschi-web/deployment/deploy.env 
}

do_static_upload() {
    TARGET_DIR="/tdurtschi.com"
    STATIC_ROOT="resource-tdurtschi-web/out/*"

    ncftpput -R -v -u $FTP_USER -p $FTP_PASS $FTP_URL $TARGET_DIR $STATIC_ROOT
}

main() {
    install_dependencies
    setup_environment
    # do_static_upload

    echo "Success!"
}

main
