(function ($hx_exports) { "use strict";
$hx_exports.sandbox = $hx_exports.sandbox || {};
var js = {};
var sandbox = {};
sandbox.Demo = $hx_exports.sandbox.Demo = function() { };
sandbox.Demo.main = function() {
};
sandbox.Demo.renderDiagram = function() {
	console.log("render diagram");
	var element = new $("#paper");
	var graph = new joint.dia.Graph();
	var paper = new joint.dia.Paper({ el : element, width : 600, height : 600, gridSize : 10, model : graph});
	var rect = new joint.shapes.basic.Rect({ position : { x : 100, y : 30}, size : { width : 100, height : 30}, attrs : { rect : { fill : "blue"}, text : { text : "my box", fill : "white"}}});
	graph.addCell(rect);
};
var q = window.jQuery;
js.JQuery = q;
$.fn.exists = function() {
	return $(this).length > 0;
};
$.fn.isVisible = function() {
	return $(this).css("display") != "none";
};
$.fn.hasAttr = function(name) {
	return $(this).attr(name) != undefined;
};
$.fn.intersects = function(el) {
	var tAxis = $(this).offset();
	var t_x_0 = tAxis.left;
	var t_x_1 = tAxis.left + $(this).outerWidth();
	var t_y_0 = tAxis.top;
	var t_y_1 = tAxis.top + $(this).outerHeight();
	var thisPos = el.offset();
	var i_x_0 = thisPos.left;
	var i_x_1 = thisPos.left + el.outerWidth();
	var i_y_0 = thisPos.top;
	var i_y_1 = thisPos.top + el.outerHeight();
	var intersects = false;
	if(t_x_0 < i_x_1 && t_x_1 > i_x_0 && t_y_0 < i_y_1 && t_y_1 > i_y_0) intersects = true;
	return intersects;
};
sandbox.Demo.main();
})(typeof window != "undefined" ? window : exports);
