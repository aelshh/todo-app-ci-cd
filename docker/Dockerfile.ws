FROM oven/bun:1

WORKDIR /user/src/app
ENV DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"


COPY ./packages ./packages
COPY ./apps/ws-backend ./apps/ws-backend 
COPY ./bun.lock  ./bun.lock  
COPY ./package.json  ./package.json  
COPY ./turbo.json ./turbo.json

RUN bun install 
RUN bun run db:generate 

EXPOSE 8080

CMD [ "bun", "run", "start:ws-backend" ]



