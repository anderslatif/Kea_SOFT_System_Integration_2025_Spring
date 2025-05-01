from ariadne import MutationType
from database import book_crud

async def create_book_resolver(obj, info, title, authorId):
    return await book_crud.create_book(title, authorId)


async def update_book_resolver(obj, info, id, title, authorId):
    return await book_crud.update_book(id, title, authorId)


async def delete_book_resolver(obj, info, id):
    return await book_crud.delete_book(id)


mutation = MutationType()
mutation.set_field("createBook", create_book_resolver)
mutation.set_field("updateBook", update_book_resolver)
mutation.set_field("deleteBook", delete_book_resolver)

