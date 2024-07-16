from typing import List, Optional
from schemas import ToDoCreate, ToDoUpdate, ToDoResponse, ToDoStatus, ToDoCategory

class Todo:
    def __init__(self, id: int, name: str, category: ToDoCategory, status: ToDoStatus, due_date: Optional[str] = None):
        self.id = id
        self.name = name
        self.category = category
        self.status = status
        self.due_date = due_date

todos = [
    Todo(id=1, name="課題をやる", category=ToDoCategory.SCHOOL, status=ToDoStatus.TASK_PENDING, due_date="2024/07/14/12:00"),
    Todo(id=2, name="掃除をする", category=ToDoCategory.HOUSEHOLD, status=ToDoStatus.TASK_PENDING, due_date="2024/07/14/15:00"),
]

def find_all() -> List[Todo]:
    return todos

def find_by_id(item_id: int) -> Optional[Todo]:
    for todo in todos:
        if todo.id == item_id:
            return todo
    return None

def find_by_name(name: str) -> List[Todo]:
    return [todo for todo in todos if name in todo.name]

def create(item_create: ToDoCreate) -> Todo:
    new_id = max(todo.id for todo in todos) + 1
    new_item = Todo(id=new_id, name=item_create.name, category=item_create.category, status=item_create.status, due_date=item_create.due_date)
    todos.append(new_item)
    return new_item

def update(item_id: int, item_update: ToDoUpdate) -> Optional[Todo]:
    todo = find_by_id(item_id)
    if todo:
        if item_update.name is not None:
            todo.name = item_update.name
        if item_update.category is not None:
            todo.category = item_update.category
        if item_update.status is not None:
            todo.status = item_update.status
        if item_update.due_date is not None:
            todo.due_date = item_update.due_date
        return todo
    return None

def delete(item_id: int) -> Optional[Todo]:
    global todos
    todo = find_by_id(item_id)
    if todo:
        todos = [i for i in todos if i.id != item_id]
        return todo
    return None
