import logging

from fastapi import APIRouter
from starlette import status

from app.institution.schemas import InstitutionRequest, InstitutionResponse

logger = logging.getLogger(__name__)

router = APIRouter(tags=["Institution"])


@router.post(
    "/institutions", response_model=InstitutionResponse, status_code=status.HTTP_200_OK
)
async def institutions(payload: InstitutionRequest):
    return InstitutionResponse(name=payload.name, domain=payload.domain)
