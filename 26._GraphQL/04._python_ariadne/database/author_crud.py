from database.data import authors


async def get_authors():
    return authors

async def get_author_by_id(author_id: int):
    return next((author for author in authors if author["id"] == author_id), None)