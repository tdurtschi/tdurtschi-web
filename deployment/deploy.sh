#!/bin/bash
apk add --no-cache ncftp

# set working directory to project root
cd /

# deployment environment sold separately
source resource-tdurtschi-web/deployment/deploy.env 

ncftpput -R -v -u $FTP_USER -p $FTP_PASS $FTP_URL /tdurtschi.com resource-tdurtschi-web/out/*
echo "Success!"