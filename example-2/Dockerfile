#
# Build a simple web site
#

FROM ionetraining/nginx:1.12.1

COPY build /opt/build

RUN mv /opt/build/usr/share/nginx/html/* /usr/share/nginx/html/ && \
    chown -R nginx.nginx /usr/share/nginx/html && \
    mv /opt/build/startup/configure-nginx.sh /startup/ && \
    chmod +x /startup/configure-nginx.sh


