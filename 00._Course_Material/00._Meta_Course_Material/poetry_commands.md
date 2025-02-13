# [poetry](https://python-poetry.org/)

Creates a toml file according to the PEP 518 standard!

---

# I want to get started with FastAPI

This is what we will do in class every time:

```bash
$ poetry init -n
$ poetry add uvicorn fastapi
$ poetry shell
$ uvicorn main:app --reload
```

---

# I want to run Anders' exmaple


Clone the repository and where the toml file is:

```bash
$ poetry shell
$ poetry install
```

Make sure that the Python version in the toml file matches one that is installed on your OS, otherwise change it in the toml file. 

---

# Additional Commands

To install additional libraries:

```bash
$ poetry add <library>
```


---


# poetry Advanced

Initialize a toml file in interactive mode:

```bash
$ poetry init
```

To initialize a project with a structure that includes tests etc.

```bash
$ poetry new <project_name>
```

