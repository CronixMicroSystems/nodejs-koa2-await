# nodejs-koa2-await

## `npm run` scripts

There are a few defined run scripts, here's a list of them with a description of what they do. To run them, simply execute `npm run <script name>` - e.g. `npm run dev`

* `start`: Used by the production environment to start the app. This will run a compiled version, so you need to execute `build` first.
* `build`: Runs the `babel` CLI to compile the app. Files are emitted to `dist/`.
* `dev`: Runs the app in development mode - uses `babel-node` to compile on-the-fly. Also uses `nodemon` to automatically restart when stuff changes.
* `debug`: Runs the app in development mode with `icebug` (a combo of `nodemon` + `node-inspector`).
* `lint`: Lints the code in `src` and `test` with `eslint`.
* `lint-watch`: Same as above, in watch-mode.

**Tip**: to pass additional arguments to the actual CLI's being called, do it like in this example:

```bash
npm run test -- --debug
```

*Note the __`--`__ before the actual arguments.*

## Directory structure

The repository root contains config files, e.g. eslint config, gitignore, etc.

* `src`: the actual source for the app goes here. Duh.
  * `api`: API endpoints go here, and are automatically loaded at startup. Please see the section about API endpoints for details.
  * `bin`: files that are usually executed by `npm run` scripts, e.g. starting the server.
  * `lib`: stuff that helps the app start up, e.g. environment, utilities for loading modules, the container implementation, etc.
  * `middleware`: custom app middleware.
  * `services`: application services, this is just to illustrate the dynamic discovery of stuff as described in the Dependency injection section.
* `test`: tests for the source code. You usually want to replicate the source structure.
  * `_helpers`: test helpers


## Environment variables

So the environment variables can be reached by importing `lib/env`.

```
import env from 'lib/env';
```

Additionally, all environment variables you'd usually find on `process.env` will be available on this object.

In the repository root, you will find a `env.yaml`, which is where you can set up environment variables so you won't have to do it from your shell. This also makes it more platform-agnostic.

The top-level nodes in the YAML-file contain a set of environment variables.
`yenv` will load the set that matches whatever `NODE_ENV` says.

I've set it up so anything in `tests` will override anything in `development` when running tests.

*Actual environment variables will take precedence over the `env.yaml` file!*

See the [`yenv` docs](https://github.com/jeffijoe/yenv) for more info.

## API endpoints

Each file in `/api` exports a default function that takes the router as the first parameter. That function registers API endpoints.

## Dependency injection

This boilerplate uses the [`Awilix`](https://github.com/jeffijoe/awilix) container for managing dependencies - please check out the Awilix documentation
for details. The container is configured in `lib/configureContainer.js`.

## Middleware

Middleware is located in the `middleware` folder and is *not* automatically loaded - they should be installed in `lib/createServer`.

## app-module-path - what?

Basically, instead of `import stuff from '../../../../../lib/stuff'`, you can use `import stuff from 'lib/stuff'`.
