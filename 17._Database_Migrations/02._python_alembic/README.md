## Getting started

SQLAlchemy is a Python SQL tookit and ORM. Alembic is a tool for creating migrations. 

```bash
$ poetry init -n
$ poetry add alembic sqlalchemy pymysql
$ poetry run alembic init alembic
$ poetry shell
```

## Configuration

Update the `alembic.ini` with the database connection information. Example for MySQL:

```ini
sqlalchemy.url = mysql+pymysql://user:password@localhost/dbname
```

If you are connecting to MySQL in Docker install the cryptography package used to securely authenticate:

```bash
$ poetry add cryptography
```

And define the string as this (adjust the port as needed):

```ini
sqlalchemy.url = mysql+pymysql://root:password@localhost:3307/dbname
```

## Creating a migration

```bash
$ alembic revision -m "create account table"
```

Update the file with the migration code from the documentation. But let's pluralize the table name to `accounts`:

https://alembic.sqlalchemy.org/en/latest/tutorial.html#create-a-migration-script

```python
def upgrade():
    op.create_table(
        'accounts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False),
        sa.Column('description', sa.Unicode(200)),
    )

def downgrade():
    op.drop_table('accounts')
```

## Running the migration

```bash
$ alembic upgrade head
```

Rollback the migration:

```bash
$ alembic downgrade -1
```

## Seeding

Inspired by this comment https://stackoverflow.com/a/19338319 but with some adjustments. Define the upgrade function as the following:

```python
def upgrade():
    accounts_table = op.create_table(
        'accounts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False),
        sa.Column('description', sa.Unicode(200)),
    )
    op.bulk_insert(accounts_table,
    [
        {'id': 1, 'name': 'John Smith', 'description': 'CEO'},
        {'id': 2, 'name': 'Ed Williams', 'description': 'CTO'},
        {'id': 3, 'name': 'Wendy Jones', 'description': 'CFO'},
    ]
)
```

