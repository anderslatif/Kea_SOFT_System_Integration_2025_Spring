from fastapi import FastAPI


app = FastAPI()

@app.get("/fastapiData")
def getFastAPIData():
    return { "data": "Data from FastAPI" }

