import socket

import uvicorn

from app.core.settings import settings


def is_port_in_use(port: int, host: str) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex((host, port)) == 0


if __name__ == "__main__":
    if is_port_in_use(settings.PORT, settings.HOST):
        print(f"port: {settings.PORT} already in use")
    else:
        print(f"port: {8080} is available")
        print(f"Starting the {settings.PROJECT_NAME}")
        print(f"Base URL: http://{settings.HOST}:{settings.PORT}")
        print(f"Docs URL: http://{settings.HOST}:{settings.PORT}{settings.DOCS_URL}")

    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)
