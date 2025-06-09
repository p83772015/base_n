FROM oven/bun

WORKDIR /app

# Bootstrap nextjs
RUN apt-get update && apt-get install -y --no-install-recommends \
    redis-tools && \
    rm -rf /var/lib/apt/lists/* && \
    bun create next-app . \
    --ts \
    --tailwind \
    --app \
    --turbopack \
    --import-alias "@/*" \
    --disable-git \
    --yes && \
    bun next telemetry disable && \
    bun next telemetry status && \
    bun install zod

# Start the server
CMD ["bun", "--bun", "run", "dev"]
