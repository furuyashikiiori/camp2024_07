from datetime import date, datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field, ConfigDict


class ToDoStatus(Enum):
    TASK_PENDING = "タスク未完了"
    TASK_COMPLETED = "タスク完了"


class ToDoCategory(Enum):
    SCHOOL = "学校関係"
    WORK = "バイト / 仕事関係"
    HOUSEHOLD = "家事関係"


class ToDoCreate(BaseModel):
    name: str = Field(min_length=2, max_length=50, examples=["課題をやる"])
    category: ToDoCategory = Field(examples=[ToDoCategory.SCHOOL])
    status: ToDoStatus = Field(examples=[ToDoStatus.TASK_PENDING])
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])


class ToDoUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=2, max_length=50, examples=["買い物する"])
    category: Optional[ToDoCategory] = Field(default=None, examples=[ToDoCategory.HOUSEHOLD])
    status: Optional[ToDoStatus] = Field(default=None, examples=[ToDoStatus.TASK_COMPLETED])
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])


class ToDoResponse(BaseModel):
    id: int = Field(gt=0, examples=[1])
    name: str = Field(min_length=2, max_length=50, examples=["課題をやる"])
    category: ToDoCategory = Field(examples=[ToDoCategory.SCHOOL])
    status: ToDoStatus = Field(examples=[ToDoStatus.TASK_PENDING])
    due_date: Optional[date] = Field(default=None, examples=["2024-07-14"])
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
