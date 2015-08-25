import * as t from "../../../types";

export var metadata = {
  optional: true
};

/**
 * [Please add a description.]
 */

export var visitor = {

  /**
   * [Please add a description.]
   */

  UnaryExpression(node, parent, scope, file) {
    if (node._ignoreSpecSymbols) return;

    if (this.parentPath.isBinaryExpression() && t.EQUALITY_BINARY_OPERATORS.indexOf(parent.operator) >= 0) {
      // optimise `typeof foo === "string"` since we can determine that they'll never need to handle symbols
      var opposite = this.getOpposite();
      if (opposite.isLiteral() && opposite.node.value !== "symbol" && opposite.node.value !== "object") return;
    }

    if (node.operator === "typeof") {
      var call = t.callExpression(file.addHelper("typeof"), [node.argument]);
      if (this.get("argument").isIdentifier()) {
        var undefLiteral = t.literal("undefined");
        var unary = t.unaryExpression("typeof", node.argument);
        unary._ignoreSpecSymbols = true;
        return t.conditionalExpression(
          t.binaryExpression("===", unary, undefLiteral),
          undefLiteral,
          call
        );
      } else {
        return call;
      }
    }
  },

  /**
   * [Please add a description.]
   */

  BinaryExpression(node, parent, scope, file) {
    if (node.operator === "instanceof") {
      return t.callExpression(file.addHelper("instanceof"), [node.left, node.right]);
    }
  },

  /**
   * [Please add a description.]
   */

  "VariableDeclaration|FunctionDeclaration"(node) {
    if (node._generated) this.skip();
  }
};
