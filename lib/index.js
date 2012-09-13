"use strict";
var crypto = require('crypto');


var RandomFaker = function () {
	this.orig = null;
	this.value = null;
};

RandomFaker.prototype.fake = function (value) {
	if (this.orig == null) {
		this.orig = crypto.randomBytes;
		var self = this;
		if (value) {
			crypto.randomBytes = function (size, callback) {
				var buf = new Buffer(size);
				buf.fill(self.value);
				if (callback) {
					callback(null, buf);
				}
				else {
					return buf;
				}
			};
		}
	}
	this.value = value;
};

RandomFaker.prototype.restore = function () {
	crypto.randomBytes = this.orig;
	this.orig = null;
};

var randomFaker = new RandomFaker();

randomFaker.RandomFaker = RandomFaker;


module.exports = randomFaker;
