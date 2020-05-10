apk add --no-cache ncftp

ncftpput -R -v -u $FTP_USER -p $FTP_PASS $FTP_URL /tdurtschi.com resource-tdurtschi-web/bin/*
echo "Success!"