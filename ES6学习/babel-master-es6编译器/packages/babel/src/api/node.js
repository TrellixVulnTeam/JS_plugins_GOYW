import isFunction from "lodash/lang/isFunction";
import transform from "../transformation";
import * as babylon from "babylon";
import * as util from "../util";
import fs from "fs";

export { util, babylon as acorn, transform };
export { pipeline } from "../transformation";
export { canCompile } from "../util";

export { default as File } from "../transformation/file";
export { default as options } from "../transformation/file/options/config";
export { default as Plugin } from "../transformation/plugin";
export { default as Transformer } from "../transformation/transformer";
export { default as Pipeline } from "../transformation/pipeline";
export { default as traverse } from "../traversal";
export { default as buildExternalHelpers } from "../tools/build-external-helpers";
export { version } from "../../package";

import * as t from "../types";
export { t as types };

/**
 * Register Babel and polyfill globally.
 */

export function register(opts?: Object) {
  var callback = require("./register/node-polyfill");
  if (opts != null) callback(opts);
  return callback;
}

/**
 * Register polyfill globally.
 */

export function polyfill() {
  require("../polyfill");
}

/**
 * Asynchronously transform `filename` with optional `opts`, calls `callback` when complete.
 */

export function transformFile(filename: string, opts?: Object, callback: Function) {
  if (isFunction(opts)) {
    callback = opts;
    opts = {};
  }

  opts.filename = filename;

  fs.readFile(filename, function (err, code) {
    if (err) return callback(err);

    var result;

    try {
      result = transform(code, opts);
    } catch (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

/**
 * Synchronous form of `transformFile`.
 */

export function transformFileSync(filename: string, opts?: Object = {}) {
  opts.filename = filename;
  return transform(fs.readFileSync(filename, "utf8"), opts);
}

/**
 * Parse script with Babel's parser.
 */

export function parse(code, opts = {}) {
  opts.allowHashBang = true;
  opts.sourceType = "module";
  opts.ecmaVersion = Infinity;
  opts.plugins = {
    jsx:  true,
    flow: true
  };
  opts.features = {};

  for (var key in transform.pipeline.transformers) {
    opts.features[key] = true;
  }

  var ast = babylon.parse(code, opts);

  if (opts.onToken) {
    opts.onToken.push(...ast.tokens);
  }

  if (opts.onComment) {
    opts.onComment.push(...ast.comments);
  }

  return ast.program;
}
