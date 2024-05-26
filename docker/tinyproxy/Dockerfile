FROM docker.io/kalaksi/tinyproxy

USER root
RUN apk add envsubst

USER ${TINYPROXY_UID}:${TINYPROXY_GID}
COPY ./tinyproxy.conf /etc/tinyproxy/tinyproxy.conf.template
EXPOSE 8888

CMD ["/bin/sh", "-c", "envsubst < /etc/tinyproxy/tinyproxy.conf.template > /etc/tinyproxy/tinyproxy.conf && /usr/bin/tinyproxy -d"] 