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

> [!IMPORTANT]
> Since Poetry (2.0.0), the shell command is not installed by default. You can use,
> the new env activate command (recommended); or the shell plugin to install the shell command
> Documentation: https://python-poetry.org/docs/managing-environments/#activating-the-environment
> Note that the env activate command is not a direct replacement for shell command.
> https://python-poetry.org/docs/managing-environments/#bash-csh-zsh


## Commands to run poetry shell using the env activate command:

If you followed the previous steps and encountered above message on poetry shell, try following:

Run the following command which will output the path to the virtual environment:
```bash
poetry env activate
OUTPUT:
source /Users/username/.cache/pypoetry/virtualenvs/your-project-xyz/bin/activate
```

Copy and run that command in your terminal:
```bash
source /Users/username/.cache/pypoetry/virtualenvs/your-project-xyz/bin/activate
```

You are now ready to continue with the rest of the commands.

```bash
uvicorn main:app --reload
```

---

# I want to run Anders' example


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

