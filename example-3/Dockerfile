#
# Build a simple web site
#

FROM ionetraining/nginx:1.12.1

ARG ARTIFACTS_ROOT=https://ioneoss.github.io/docker-training/artifacts/production

COPY build /opt/build

RUN mv /opt/build/startup/configure-nginx.sh /startup/ && \
    chmod +x /startup/configure-nginx.sh

ENV ROOT_PATH=${ARTIFACTS_ROOT}

VOLUME ["/usr/share/nginx/html"]
