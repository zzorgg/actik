import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.status import HTTP_200_OK

from app.core.settings import settings

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name) - %(levelname)s - %(message)s"
)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    docs_url=settings.DOCS_URL,
    description="FastAPI backend server/api for digital academic credentials verification",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGIN,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", status_code=HTTP_200_OK)
async def root():
    return {"status": "ok"}
