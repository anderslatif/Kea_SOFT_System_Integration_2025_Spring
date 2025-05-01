from ariadne import QueryType
from database.book_crud import get_books, get_book_by_id
from database.author_crud import get_authors, get_author_by_id

async def get_all_books_resolver(obj, info):
    return await get_books()


async def get_book_by_id_resolver(obj, info, id):
    return await get_book_by_id(id)


async def get_authors_resolver(obj, info):
    return await get_authors()


async def get_author_by_id_resolver(obj, info, id):
    return await get_author_by_id(id)


query = QueryType()
query.set_field("books", get_all_books_resolver)
query.set_field("book", get_book_by_id_resolver)
query.set_field("authors", get_authors_resolver)
query.set_field("author", get_author_by_id_resolver)
