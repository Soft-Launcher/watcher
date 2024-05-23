# # Docker file tailored for a pnpm monorepo, reference: https://pnpm.io/docker

# ##Declaring base container
FROM node:20-slim AS base
# Required for prisma
RUN apt-get update -y && apt-get install -y openssl 
# Required for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ##Build phase
FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=@watcher/backend --prod /prod/backend
RUN pnpm deploy --filter=@watcher/frontend --prod /prod/frontend

FROM base AS backend
COPY --from=build /prod/backend /prod/backend
WORKDIR /prod/backend
EXPOSE 3000
CMD ["sh", "-c", "if [ -z \"$POSTGRES_URL\" ]; then echo 'FOO is not set'; exit 1; fi && pnpm start"]

FROM base AS frontend
COPY --from=build /prod/frontend /prod/frontend
WORKDIR /prod/frontend
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD [ "node", "./dist/server/entry.mjs" ]