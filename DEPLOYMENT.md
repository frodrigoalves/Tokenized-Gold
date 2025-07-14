# Deployment Guide

The platform uses Docker Compose to orchestrate MongoDB, the API and the Next.js frontend.

## Local
```bash
docker-compose up --build
```
Copy `.env.example` to `.env` and adjust values as needed before running.

## Cloud
Deploy the same containers to your provider of choice. Ensure the environment variables match those in `.env.example` and set persistent storage for MongoDB.
