from typing import List
from fastapi import APIRouter, Path, Query, HTTPException, Depends
from sqlalchemy.orm import Session
from starlette import status
from cruds.todo import find_all, find_by_id, find_by_name, create, update, delete
from schemas import ToDoCreate, ToDoUpdate, ToDoResponse
from database import get_db

router = APIRouter(prefix="/todos", tags=["Todos"])

# 全てのToDoを取得
@router.get("", response_model=List[ToDoResponse], status_code=status.HTTP_200_OK)
async def get_todos(db: Session = Depends(get_db)):
    return find_all(db)

# IDでToDoを取得
@router.get("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def get_todo_by_id(id: int, db: Session = Depends(get_db)):
    todo = find_by_id(db, id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

# 名前でToDoを取得
@router.get("/search", response_model=List[ToDoResponse], status_code=status.HTTP_200_OK)
async def get_todos_by_name(name: str = Query(min_length=2, max_length=20), db: Session = Depends(get_db)):
    return find_by_name(db, name)

# ToDoを作成
@router.post("", response_model=ToDoResponse, status_code=status.HTTP_201_CREATED)
async def create_todo(todo_create: ToDoCreate, db: Session = Depends(get_db)):
    return create(db, todo_create)

# ToDoを更新
@router.put("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def update_todo(id: int, todo_update: ToDoUpdate, db: Session = Depends(get_db)):
    updated_todo = update(db, id, todo_update)
    if not updated_todo:
        raise HTTPException(status_code=404, detail="Todo not updated")
    return updated_todo

# ToDoを削除
@router.delete("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def delete_todo(id: int, db: Session = Depends(get_db)):
    deleted_todo = delete(db, id)
    if not deleted_todo:
        raise HTTPException(status_code=404, detail="Todo not deleted")
    return deleted_todo
