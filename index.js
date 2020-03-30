'use strict';

// eslint-disable-next-line no-extend-native, consistent-return
String.prototype.trimStart = String.prototype.trimStart || function () {
	if (String.prototype.trimLeft) {
		return this.trimLeft();
	}
	if (String.prototype.trim) {
		var trimmed = this.trim();
		var indexOfWord = this.indexOf(trimmed);

		return this.slice(indexOfWord, this.length);
	}
};
