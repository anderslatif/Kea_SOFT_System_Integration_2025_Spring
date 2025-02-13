from dotenv import load_dotenv, dotenv_values
import os


load_dotenv()
# print(os.getenv("API_KEY"))

config = dotenv_values(".env")
# print(config["API_KEY"])

print(os.environ)