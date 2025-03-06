from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import StreamingResponse
from datetime import datetime
import asyncio

app = FastAPI()

templates = Jinja2Templates(directory="templates")

@app.get("/")
def serve_root_page(request: Request):
    return templates.TemplateResponse("index.html", { "request": request })


async def date_generator():
    while True:
        now = datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
        yield f"data: {now}\n\n"
        await asyncio.sleep(1)


@app.get("/sse")
def sse():
    return StreamingResponse(date_generator(), media_type="text/event-stream")

