from datetime import date, datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field, ConfigDict


class ToDoStatus(str, Enum):  
    TASK_PENDING = "タスク未完了"
    TASK_COMPLETED = "タスク完了"

class ToDoCategory(str, Enum): 
    Work = "仕事"
    Personal = '家事'
    Shopping = '買い物'
    Others = 'その他'


class ToDoCreate(BaseModel):
    name: str = Field(min_length=2, max_length=50, examples=["課題をやる"])
    category: str #ToDoCategory = Field(examples=[ToDoCategory.SCHOOL])
    status: str #ToDoStatus = Field(examples=[ToDoStatus.TASK_PENDING])
    due_date: Optional[date] = None #Field(default=None, examples=["2024-07-14"])

    class Config:
        from_attributes = True


class ToDoUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=2, max_length=50, examples=["買い物する"])
    category: Optional[str] #Optional[ToDoCategory] = Field(default=None, examples=[ToDoCategory.HOUSEHOLD])
    status: Optional[str] #Optional[ToDoStatus] = Field(default=None, examples=[ToDoStatus.TASK_COMPLETED])
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])


class ToDoResponse(BaseModel):
    id: int = Field(gt=0, examples=[1])
    name: str = Field(min_length=2, max_length=50, examples=["課題をやる"])
    category: str #ToDoCategory = Field(examples=[ToDoCategory.SCHOOL])
    status: str #ToDoStatus = Field(examples=[ToDoStatus.TASK_PENDING])
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
