# # Reference: https://pnpm.io/docker

# FROM node:20-slim AS base
# RUN apt-get update -y && apt-get install -y openssl
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# COPY . /app
# WORKDIR /app

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm --filter @watcher/backend build

# FROM base
# COPY --from=prod-deps /app/node_modules /app/node_modules
# COPY --from=prod-deps /app/backend/node_modules /app/backend/node_modules
# COPY --from=build /app/backend/.keystone /app/backend/.keystone
# EXPOSE 3000
# CMD [ "pnpm", "--filter", "@watcher/backend", "start" ]

FROM node:20-slim AS base
RUN apt-get update -y && apt-get install -y openssl
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=@watcher/backend --prod /prod/backend
RUN pnpm deploy --filter=@watcher/frontend --prod /prod/fronted

FROM base AS backend
COPY --from=build /prod/backend /prod/backend
WORKDIR /prod/backend
EXPOSE 3000
CMD [ "pnpm", "start" ]

FROM base AS frontend
COPY --from=build /prod/frontend /prod/frontend
WORKDIR /prod/frontend
EXPOSE 4321
CMD [ "pnpm", "start" ]