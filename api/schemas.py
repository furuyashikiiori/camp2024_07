from datetime import date, datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field

class ToDoStatus(str, Enum):
    TASK_PENDING = "タスク未完了"
    TASK_COMPLETED = "タスク完了"

class ToDoCategory(str, Enum): 
    Work = "Work"
    Personal = 'Personal'
    Shopping = 'Shopping'
    Others = 'Others'

class ToDoCreate(BaseModel):
    name: str = Field(min_length=2, max_length=50, examples=["課題をやる"])
    category: ToDoCategory
    status: ToDoStatus = ToDoStatus.TASK_PENDING  # デフォルト値を設定
    due_date: Optional[date] = None

    class Config:
        from_attributes = True

class ToDoUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=2, max_length=50, examples=["買い物する"])
    category: Optional[ToDoCategory]
    status: Optional[ToDoStatus]
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])

class ToDoResponse(BaseModel):
    id: int = Field(gt=0, examples=[1])
    name: str = Field(min_length=2, max_length=50, examples=["課題をやる"])
    category: ToDoCategory
    status: ToDoStatus
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
