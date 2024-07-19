from sqlalchemy.orm import Session
from models import Todo
from schemas import ToDoCreate, ToDoUpdate
from typing import Optional, List

def find_all(db: Session) -> List[Todo]:
    return db.query(Todo).all()

def find_by_id(db: Session, id: int) -> Optional[Todo]:
    return db.query(Todo).filter(Todo.id == id).first()

def find_by_name(db: Session, name: str) -> List[Todo]:
    return db.query(Todo).filter(Todo.name.like(f"%{name}%")).all()

def create(db: Session, todo_create: ToDoCreate) -> Todo:
    new_todo = Todo(
        **todo_create.model_dump()
    )
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

def update(db: Session, id: int, todo_update: ToDoUpdate) -> Optional[Todo]:
    todo = find_by_id(db, id)
    if todo is None:
        return None
    todo.name = todo_update.name if todo_update.name is not None else todo.name
    todo.category = todo_update.category if todo_update.category is not None else todo.category
    todo.status = todo_update.status if todo_update.status is not None else todo.status
    todo.due_date = todo_update.due_date if todo_update.due_date is not None else todo.due_date
    db.commit()
    db.refresh(todo)
    return todo

def delete(db: Session, id: int) -> Optional[Todo]:
    todo = find_by_id(db, id)
    if todo is None:
        return None
    db.delete(todo)
    db.commit()
    return todo
