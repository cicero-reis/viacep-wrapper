"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

var JSON = 'json';

var search = function search(cep) {
  return fetch("".concat(_config.API_URL, "/").concat(cep, "/").concat(JSON)).then(_utils.toJSON);
};

exports.search = search;