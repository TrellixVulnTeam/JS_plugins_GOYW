import * as defineMap from "../../helpers/define-map";
import * as t from "../../../types";

/**
 * Turn [object initializer mutators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Method_definitions)
 * into `Object.defineProperties`.
 *
 * **In**
 *
 * ```javascript
 * var foo = {
 *   get bar() {
 *     return "bar";
 *   }
 * };
 * ```
 *
 * **Out**
 *
 * ```javascript
 * var foo = Object.defineProperties({}, {
 *   bar: {
 *     get: function () {
 *       return "bar";
 *     },
 *     enumerable: true,
 *     configurable: true
 *   }
 * });
 * ```
 */

export var visitor = {

  /**
   * Look for getters and setters on an object.
   * Filter them out and wrap the object with an `Object.defineProperties` that
   * defines the getters and setters.
   */

  ObjectExpression(node, parent, scope, file) {
    var hasAny = false;
    for (var prop of (node.properties: Array)) {
      if (prop.kind === "get" || prop.kind === "set") {
        hasAny = true;
        break;
      }
    }
    if (!hasAny) return;

    var mutatorMap = {};

    node.properties = node.properties.filter(function (prop) {
      if (prop.kind === "get" || prop.kind === "set") {
        defineMap.push(mutatorMap, prop, prop.kind, file);
        return false;
      } else {
        return true;
      }
    });

    return t.callExpression(
      t.memberExpression(t.identifier("Object"), t.identifier("defineProperties")),
      [node, defineMap.toDefineObject(mutatorMap)]
    );
  }
};
