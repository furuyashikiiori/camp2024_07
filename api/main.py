from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import todo

app = FastAPI()

# CORSを許可するオリジンのリスト
origins = [
    "http://localhost:3000",  # Reactアプリケーションのオリジン
    # 必要に応じて他のオリジンを追加
]

# CORSMiddlewareをアプリケーションに追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # すべてのオリジンを許可する場合は ["*"] を使用
    allow_credentials=True,
    allow_methods=["*"],  # すべてのHTTPメソッドを許可
    allow_headers=["*"],  # すべてのHTTPヘッダーを許可
)

#テスト用のAPI
@app.get("/api/data")
def read_data():
    return {"message": "Hello from FastAPI!!!"}

app.include_router(todo.router)
