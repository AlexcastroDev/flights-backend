# Flights

An Alura Challenge #7 project.

https://trello.com/b/OnuqDQ3A/alurachallengebackend7-semana-1

## How to run

### Docker

```bash
docker-compose up -d api
```

### Local

```bash
yarn
```

If you want to install the dependencies with docker, run:

```bash
chmod +x ./scripts/install.sh
```

```bash
docker run -it --rm -v "$(pwd)":/usr/src/app -w /usr/src/app node:18 npm install
```

# TODO:

- [x] API of list flights
- [x] in-memory database storage
- [x] Unit tests
- [x] Implement Prisma ORM
- [x] Implement AuthGuard
- [x] in-memory and database storage
- [x] Unit tests
- [x] Implement a Swagger
- [x] API of create a comment
- [x] Implement a Docker
- [x] Implement a Docker Compose
- [x] Implement middleware to inject the user on request
- [x] Implement a Auth Exception Handler
- [ ] Implement errors handler cases on testimonial create, update and delete
- [ ] Move interfaces to Core package
- [ ] Implement a Global Exception Handler
- [ ] Implement a Logger
- [ ] Implement a Cache ( redis )
- [ ] Implement Roles (maybe ?)
- [ ] Implement a CI/CD
- [ ] Deploy do Azure
- [ ] Implement of Upload of user picture on Azure Blob Storage
- [ ] Improving testing, not need to repeat the same code

## References

- Cannot use 2 databases in Prisma yet:
  https://github.com/prisma/prisma/issues/2443
  https://github.com/prisma/prisma/issues/11129
