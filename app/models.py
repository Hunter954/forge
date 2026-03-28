from datetime import datetime
from . import db


class Lead(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    company = db.Column(db.String(160), nullable=True)
    phone = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(160), nullable=True)
    project_type = db.Column(db.String(80), nullable=False)
    message = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
