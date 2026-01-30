from pydantic import BaseModel, HttpUrl


class InstitutionRequest(BaseModel):
    name: str
    domain: HttpUrl


class InstitutionResponse(BaseModel):
    name: str
    domain: HttpUrl
