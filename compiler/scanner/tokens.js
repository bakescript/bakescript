import { Addition } from "./addition";
import { NewLine } from "./newLine";

const tokens = [
  // Keywords
  // ClassExpression,
  // Else,
  // False,
  // FunctionExpression,
  // LogicalAnd,
  // For,
  // Double-character tokens
  // Equality,
  // GreaterThenOrEqual,
  // Inequality,
  // LessThenOrEqual,
  // Single-character tokens
  Addition,
  // Assignment,
  // Comma,
  // Division,
  // Dot,
  // GreaterThen,
  // LeftBrace,
  // LeftParen,
  // LessThen,
  // LogicalNot,
  // Multiplication,
  // RightBrace,
  // RightParen,
  // Subtraction,
  // Semicolon,
  // Ignored characters
  NewLine,
  // Tab,
  // WhiteSpace,
];

export { tokens };
