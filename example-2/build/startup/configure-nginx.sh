#!/bin/bash

new_title=""
new_tagline=""

while [ $# -gt 0 ]
do
  case "$1" in
    --title ) new_title="$2"; shift ;;
    --tagline ) new_tagline="$2"; shift ;;
  esac
  shift
done

if [[ ! -z "${new_title}" ]]
then
    sed -i "s|<title>Bocoin - Cryptocurrency by Dogs, for Humans</title>|<title>${new_title}</title>|" /usr/share/nginx/html/index.html
fi

if [[ ! -z "${new_tagline}" ]]
then
    sed -i "s|<p class=\"isTextCenter\">Let little Tommy earn money for you, just by digging.</p>|<p class=\"isTextCenter\">${new_tagline}</p>|" /usr/share/nginx/html/index.html
fi
