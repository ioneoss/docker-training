#!/bin/bash

content=""
new_tagline=""

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
  curl -k ${content} -o curled-content.zip
  unzip -o curled-content.zip
  rm curled-content.zip
  chown -R nginx.nginx *
fi
