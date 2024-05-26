FROM docker.io/kalaksi/tinyproxy

ARG ROOT_PWD
RUN apk add --no-cache envsubst

COPY ./tinyproxy.conf /etc/tinyproxy/tinyproxy.conf.template
EXPOSE 8888

CMD ["/bin/sh", "-c", "envsubst < /etc/tinyproxy/tinyproxy.conf.template > /etc/tinyproxy/tinyproxy.conf && /usr/bin/tinyproxy -d"] 