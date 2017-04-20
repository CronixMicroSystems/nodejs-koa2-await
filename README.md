# nodejs-koa2-await

## `yarn run` scripts

* `start`: Used by the production environment to start the app. This will run a compiled version, so you need to execute `build` first.
* `build`: Runs the `babel` CLI to compile the app. Files are emitted to `dist/`.
* `dev`: Runs the app in development mode - uses `babel-node` to compile on-the-fly. Also uses `nodemon` to automatically restart when stuff changes.
* `debug`: Runs the app in development mode with `icebug` (a combo of `nodemon` + `node-inspector`).
* `lint`: Lints the code in `src` and `test` with `eslint`.
* `lint-watch`: Same as above, in watch-mode.
