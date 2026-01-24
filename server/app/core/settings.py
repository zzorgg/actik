from typing import List

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env.local",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=True,
    )

    PROJECT_NAME: str = Field(..., description="Project Name = server")
    DOCS_URL: str = Field(..., description="OpenAPI Swagger Documentation URL")
    VERSION: str = Field(..., description="Version of Backend API")
    API_PREFIX: str = Field(..., description="API prefix /api/v1 temporary only")
    ENVIRONMENT: str = Field(..., description="Local or Production")

    PORT: int = Field(..., description="Port on which the backend can be accessed")
    HOST: str = Field(..., description="Host URL (www.example.com or localhost)")

    CORS_ORIGIN: List[str] = Field(
        default_factory=list, description="All allowed origins"
    )


settings = Settings()  # pyright: ignore[reportCallIssue]
