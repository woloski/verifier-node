var https = require("https"); function parseResponse(b) { var a = this; this.data = JSON.parse(b); this.field = function (b) { return a.data[b] }; this.valid = function () { return a.data.status } } function verify(b, a) { var d = "https://verifier.meetchopra.com/verify/" + b + "?token=" + a, c = ""; return new Promise(function (b, a) { https.get(d, function (a) { a.on("data", function (a) { return c += a }); a.on("end", function () { return b(new parseResponse(c)) }) }) }) } module.exports.verify = verify;