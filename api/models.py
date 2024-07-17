from datetime import datetime
from sqlalchemy import Column, String, Integer, Enum, Date, DateTime
from database import Base
from schemas import ToDoCategory, ToDoStatus

class Todo(Base):
    __tablename__ = "todos"
    
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    category = Column(Enum(ToDoCategory), nullable=False)
    status = Column(Enum(ToDoStatus), nullable=False, default=ToDoStatus.TASK_PENDING)
    due_date = Column(Date, nullable=True)
    created_at = Column(DateTime, default=datetime.now())
    updated_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())
