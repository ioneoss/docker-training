#!/bin/bash

artifacts_root=${ROOT_PATH}
content=""

while [ $# -gt 0 ]
do
  case "$1" in
    --content ) content="$2"; shift ;;
  esac
  shift
done

if [[ ! -z "${content}" ]]
then
  cd /usr/share/nginx/html
  rm -rf *
  curl -k "${artifacts_root}/${content}" -o curled-content.zip
  unzip -o curled-content.zip
  rm curled-content.zip
  site_dir=$(find * -maxdepth 0 -type d)
  mv ${site_dir}/* .
  rm -rf ${site_dir}
  chown -R nginx.nginx *
fi
