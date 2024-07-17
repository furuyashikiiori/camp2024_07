from typing import Annotated
from typing import List
from fastapi import APIRouter, Path, Query, HTTPException, Depends
from sqlalchemy.orm import Session
from starlette import status
from cruds import todo as todo_cruds
from schemas import ToDoCreate, ToDoUpdate, ToDoResponse
from database import get_db


DbDpendency = Annotated[Session, Depends(get_db)]

router = APIRouter(prefix="/todos", tags=["Todos"])

#全てのToDoを取得
@router.get("", response_model=List[ToDoResponse], status_code=status.HTTP_200_OK)
async def find_all(db: DbDpendency):
    return todo_cruds.find_all(db)

#IDでToDoを取得
@router.get("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def find_by_id(db: DbDpendency, id: int = Path(gt=0)):
    found_todo = todo_cruds.find_by_id(db, id)
    if not found_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return found_todo

#名前でToDoを取得
@router.get("/search/", response_model=List[ToDoResponse], status_code=status.HTTP_200_OK)
async def find_by_name(db: DbDpendency, name: str = Query(min_length=2, max_length=20)):
    return todo_cruds.find_by_name(db, name)

#ToDoを作成
@router.post("", response_model=ToDoResponse, status_code=status.HTTP_201_CREATED)
async def create(db: DbDpendency, todo_create: ToDoCreate):
    return todo_cruds.create(db, todo_create)

#ToDoを更新
@router.put("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def update(db: DbDpendency, todo_update: ToDoUpdate, id: int = Path(gt=0)):
    updated_todo = todo_cruds.update(db, id, todo_update)
    if not updated_todo:
        raise HTTPException(
            status_code=404, 
            detail="Item not updated"
        )
    return updated_todo

#ToDoを削除
@router.delete("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def delete(db: DbDpendency, id: int = Path(gt=0)):
    deleted_todo = todo_cruds.delete(db, id)
    if not deleted_todo:
        raise HTTPException(status_code=404, detail="Item not deleted")
    return deleted_todo



