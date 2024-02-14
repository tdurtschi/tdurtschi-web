#! /bin/bash
set -e

PROJECT_ROOT="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )"

export_variables_from_file() {
    if [ -f $1 ]; then
        echo "loading env file $1"
    fi

    if [ ! -f $1 ]; then
        echo "😭 ERROR!"
        echo "🔴 File $1 does not exist in directory $PROJECT_ROOT/scripts"
        echo ""
        exit 1
    fi

    set -o allexport
    . $1
    set +o allexport
}

upload_static_site() {
    az storage blob upload-batch --account-name $AZ_STORAGE_ACCT_NAME \
        --overwrite --auth-mode key \
        -d '$web' \
        -s $SRC_DIR
}

main() {
    cd $PROJECT_ROOT
    
    # ./scripts/ci.sh

    export_variables_from_file ./scripts/deploy.env
    upload_static_site
}

main