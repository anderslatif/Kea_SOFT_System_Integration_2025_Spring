from fastapi import FastAPI

app = FastAPI()

from routers import spacecrafts_router

app.include_router(spacecrafts_router)
