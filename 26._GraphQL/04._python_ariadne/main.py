from ariadne import load_schema_from_path, format_error, make_executable_schema
from ariadne.asgi import GraphQL
from fastapi import FastAPI
import resolvers

IS_DEBUG = False
app = FastAPI()

def custom_error_formatter(error, debug):
    if IS_DEBUG:
        return format_error(error)
        
    return {
        "message": error.message,
        "locations": [dict(line=error.locations[0].line, column=error.locations[0].column)],
    }


type_defs = load_schema_from_path("graphql/schema.graphql")
# todo implements subscriptions
# how to handle subscriptions in Ariadne is going through a "stage of transition"
# learn more: https://ariadnegraphql.org/docs/subscriptions.html
# resolvers = [query, mutation, subscription]
resolvers = [resolvers.query, resolvers.mutation]
schema = make_executable_schema(type_defs, resolvers)

graphQL = GraphQL(schema, error_formatter=custom_error_formatter, debug=IS_DEBUG)


app.mount("/graphql", graphQL)
