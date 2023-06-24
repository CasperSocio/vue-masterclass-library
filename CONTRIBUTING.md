# Getting started

1. Make sure you have at least Node version 16

Git is tracking the `package-lock.json` file which should not change unless new packages are installed or existing packages are upgraded. Use `npm ci` to install packages after cloning the repository, so not to alter `package-lock.json`.

2. Install dependencies with `npm ci`

# Project structure

Here's an overview of the most important areas within the repo.

```
root/
--src/
----assets/
------icons/      SVG files used by the Icon component
----components/   All library components
----style/        CSS/SASS files
```
