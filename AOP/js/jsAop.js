/**
 * 作者：王凯
 * 
 * date:2017-12-15
 * 
 * 
 **/
function dealParam(param) {
	param = typeof param == "string" ? [param] : param;
	return param;
}
Function.prototype.after = function(func, parm1, parm2) {
	var param1 = null,
		param2 = null;
	if(typeof func !== "function") {
		return false;
	}
	if(parm1) {
		parm1 = dealParam(parm1);
	}
	if(parm2) {
		parm2 = dealParam(parm2);
	}

	var _self = this;
	return function() {
		var _this = this;
		_self.apply(_this, parm1);
		func.apply(_this, parm2);
	}
}

Function.prototype.before = function(func, parm1, parm2) {
	var param1 = null,
		param2 = null;
	if(typeof func !== "function") {
		return false;
	}
	if(parm1) {
		parm1 = dealParam(parm1);
	}
	if(parm2) {
		parm2 = dealParam(parm2);
	}

	var _self = this;
	return function() {
		var _this = this;
		func.apply(_this, parm2);
		_self.apply(_this, parm1);

	}
}