#!/bin/sh

if [ ! -f ".env" ]; then
   cp .env.example .env
fi

yarn

yarn prisma migrate dev --name init

yarn dev