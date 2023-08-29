FROM prom/prometheus

COPY prometheus.yml /etc/prometheus/

ENV PORT=9090

EXPOSE 9090

CMD ["--config.file=/etc/prometheus/prometheus.yml"]