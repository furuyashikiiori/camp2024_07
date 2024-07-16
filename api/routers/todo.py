from typing import List
from fastapi import APIRouter, Path, Query, HTTPException
from starlette import status
from cruds import todo as todo_cruds
from schemas import ToDoCreate, ToDoUpdate, ToDoResponse

router = APIRouter(prefix="/todos", tags=["Todos"])

@router.get("", response_model=List[ToDoResponse], status_code=status.HTTP_200_OK)
async def find_all():
    return todo_cruds.find_all()

@router.get("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def find_by_id(id: int = Path(gt=0)):
    found_todo = todo_cruds.find_by_id(id)
    if not found_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return found_todo

@router.get("/search", response_model=List[ToDoResponse], status_code=status.HTTP_200_OK)
async def find_by_name(name: str = Query(min_length=2, max_length=20)):
    return todo_cruds.find_by_name(name)

@router.post("", response_model=ToDoResponse, status_code=status.HTTP_201_CREATED)
async def create(todo_create: ToDoCreate):
    return todo_cruds.create(todo_create)

@router.put("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def update(todo_update: ToDoUpdate, id: int = Path(gt=0)):
    updated_todo = todo_cruds.update(id, todo_update)
    if not updated_todo:
        raise HTTPException(status_code=404, detail="Item not updated")
    return updated_todo

@router.delete("/{id}", response_model=ToDoResponse, status_code=status.HTTP_200_OK)
async def delete(id: int = Path(gt=0)):
    deleted_todo = todo_cruds.delete(id)
    if not deleted_todo:
        raise HTTPException(status_code=404, detail="Item not deleted")
    return deleted_todo



