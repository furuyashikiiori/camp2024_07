import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import todo
from database import engine, Base

Base.metadata.create_all(bind=engine)  # データベーススキーマを作成

app = FastAPI()

logging.basicConfig(level=logging.DEBUG)

# CORS設定
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todo.router)

