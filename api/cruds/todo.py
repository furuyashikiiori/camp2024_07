from sqlalchemy.orm import Session
from typing import Optional, List
from schemas import ToDoCreate, ToDoUpdate, ToDoResponse, ToDoCategory
from models import Todo

def find_all(db: Session) -> List[Todo]:
    return db.query(Todo).all()

def find_by_id(db:Session, id: int) -> Optional[Todo]:
    return db.query(Todo).filter(Todo.id == id).first()

def find_by_name(db: Session, name: str) -> List[Todo]:
    return db.query(Todo).filter(Todo.name.like(f"%{name}%")).all()

def create(db: Session, todo_create: ToDoCreate) -> Todo:
    new_todo = Todo(
        **todo_create.model_dump()
    )
    db.add(new_todo)
    db.commit()
    return new_todo

def update(db: Session, id: int, todo_update: ToDoUpdate) -> Optional[Todo]:
    todo = find_by_id(db, id)
    if todo is None:
        return None
    
    todo.name = (
        todo.name 
        if todo_update.name is None 
        else todo_update.name
    )
    todo.category = (
        todo.category 
        if todo_update.category is None 
        else todo_update.category
    )
    todo.status = (
        todo.status 
        if todo_update.status is None 
        else todo_update.status
    )
    todo.due_date = (
        todo.due_date 
        if todo_update.due_date is None 
        else todo_update.due_date
    )
    db.add(todo)
    db.commit()
    
    return todo
    
    
def delete(db:Session, id: int) -> Optional[Todo]:
    todo = find_by_id(db, id)
    if todo is None:
        return None
    db.delete(todo)
    db.commit()
    return todo
