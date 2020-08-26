// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var BigJs = require("big.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function toFixed(a, dp) {
  return a.toFixed(dp);
}

function plus(a, b) {
  return a.plus(b);
}

function minus(a, b) {
  return a.minus(b);
}

function div(a, b) {
  return a.div(b);
}

function times(a, b) {
  return a.times(b);
}

function valueOf(a) {
  return a.valueOf();
}

function round(a, dp) {
  return a.round(dp, 1);
}

function eq(a, b) {
  return a.eq(b);
}

function gt(a, b) {
  return a.gt(b);
}

function gte(a, b) {
  return a.gte(b);
}

function lt(a, b) {
  return a.lt(b);
}

function lte(a, b) {
  return a.lte(b);
}

function fromFloat(prim) {
  return BigJs.Big(prim);
}

function fromInt(prim) {
  return BigJs.Big(prim);
}

function toFloat(decimal) {
  return Caml_format.caml_float_of_string(decimal.valueOf());
}

function toInt(decimal) {
  return Caml_format.caml_int_of_string(decimal.valueOf());
}

function $plus$dot(a, b) {
  return a.plus(b);
}

function $star$dot(a, b) {
  return a.times(b);
}

function $neg$dot(a, b) {
  return a.minus(b);
}

function $slash$dot(a, b) {
  return a.div(b);
}

function $$dot(a, b) {
  return a.toFixed(b);
}

function $at$dot(a, b) {
  return a.round(b, 1);
}

function $eq$eq$dot(a, b) {
  return a.eq(b);
}

function $eq$eq$eq$dot(a, b) {
  return a.eq(b);
}

function $great$dot(a, b) {
  return a.gt(b);
}

function $great$eq$dot(a, b) {
  return a.gte(b);
}

function $less$dot(a, b) {
  return a.lt(b);
}

function $less$eq$dot(a, b) {
  return a.lte(b);
}

var Operators = {
  $plus$dot: $plus$dot,
  $star$dot: $star$dot,
  $neg$dot: $neg$dot,
  $slash$dot: $slash$dot,
  $$dot: $$dot,
  $at$dot: $at$dot,
  $eq$eq$dot: $eq$eq$dot,
  $eq$eq$eq$dot: $eq$eq$eq$dot,
  $great$dot: $great$dot,
  $great$eq$dot: $great$eq$dot,
  $less$dot: $less$dot,
  $less$eq$dot: $less$eq$dot
};

var big = fromFloat;

exports.toFixed = toFixed;
exports.plus = plus;
exports.minus = minus;
exports.div = div;
exports.times = times;
exports.valueOf = valueOf;
exports.round = round;
exports.eq = eq;
exports.gt = gt;
exports.gte = gte;
exports.lt = lt;
exports.lte = lte;
exports.fromFloat = fromFloat;
exports.big = big;
exports.fromInt = fromInt;
exports.toFloat = toFloat;
exports.toInt = toInt;
exports.Operators = Operators;
/* big.js Not a pure module */
