from pydantic import BaseModel
from typing import List


class PropertyRequest(BaseModel):
    corridor: str
    bhk: int
    carpet_area: int
    bathrooms: int
    floor: int
    amenities: List[str]