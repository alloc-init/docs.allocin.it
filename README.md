# Documentation portal for [[alloc] init]

This repository houses the public documentation for [[alloc] init]

## Usage

Clone the repo:

```bash
git clone git@github.com:alloc-init/docs.allocin.it.git
```

Install all dependencies:

```bash
cd docs.allocin.it
yarn
```

Run an interactive preview:

```bash
yarn start
```

Build all docs and serve them locally:

```bash
yarn build
yarn serve
```

# Structure

The project follows the monorepo pattern to simplify dependency management.

There exist four separate sets of docs contained in the following folders.

* `./zkllvm`
* `./proof-market`
* `./nil`
* `./crypto3`

All four sets of docs are rendered as a single React app configured in `docusaurus.config.js`.

# Contributing

Perform the following actions if something needs to be changed in the docs:

* Click on [Issues](https://github.com/alloc-init/docs.allocin.it/issues)
* Select **New issue**
* Select a suitable issue template
* Fill the template and submit the issue

Alternatively:

* Create a new branch
* Make the necessary changes
* Open a PR into `main` and request a review
