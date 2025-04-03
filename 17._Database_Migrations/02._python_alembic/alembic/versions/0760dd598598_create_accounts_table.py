"""create accounts table

Revision ID: 0760dd598598
Revises: 
Create Date: 2025-04-03 09:25:36.342246

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0760dd598598'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None



def upgrade():
    accounts_table = op.create_table(
        'accounts',
        sa.Column('id', sa.Integer()),
        sa.Column('name', sa.String(length=50), nullable=False),
        sa.Column('description', sa.VARCHAR(200)),
        sa.Column('last_transaction_date', sa.DateTime()),
        sa.PrimaryKeyConstraint('id')
    )
    op.bulk_insert(accounts_table,
    [
        { 'id': 1, 'name': 'John Smith', 'description': 'CEO' },
        { 'id': 2, 'name': 'Ed Williams', 'description': 'CTO' },
        { 'id': 3, 'name': 'Wendy Jones', 'description': 'CFO' }
    ]
    )


def downgrade():
    op.drop_table("accounts")
