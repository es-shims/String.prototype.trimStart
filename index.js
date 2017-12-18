String.prototype.trimStart = String.prototype.trimStart ? String.prototype.trimStart : function() {
	if(String.prototype.trimLeft) {
		return this.trimLeft();
	} else if(String.prototype.trim) {
		var trimmed = this.trim();
		var indexOfWord = this.indexOf(trimmed);
		
		return this.slice(indexOfWord, this.length);
	}
};