(function ($hx_exports) { "use strict";
$hx_exports.sandbox = $hx_exports.sandbox || {};
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var js = {};
var m3 = {};
m3.util = {};
m3.util.LambdaX = function() { };
m3.util.LambdaX.iteri = function(it,f) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x,i);
		i += 1;
	}
};
var sandbox = {};
sandbox.Demo = $hx_exports.sandbox.Demo = function() { };
sandbox.Demo.main = function() {
};
sandbox.Demo.renderDiagram = function() {
	var element = new $("#paper");
	var graph = new joint.dia.Graph();
	var paper = new joint.dia.Paper({ el : element, width : 800, height : 600, gridSize : 10, model : graph});
	var rect = new joint.shapes.basic.Rect({ position : { x : 20, y : 10}, size : { width : 150, height : 30}, attrs : { rect : { fill : "blue"}, text : { text : "Basic Shape Rect", fill : "white"}}});
	graph.addCell(rect);
	var classes_alpha = new joint.shapes.uml.Class({ position : { x : 20, y : 50}, size : { width : 200, height : 100}, name : "SomeClass", attributes : ["someAttribute: String"], methods : ["+ isAwesome(text: String): Boolean"]});
	var classes_beta = new joint.shapes.uml.Abstract({ position : { x : 230, y : 50}, size : { width : 200, height : 100}, name : "SomeAbstract", attributes : ["someAttribute: String"], methods : ["+ isCool(text: String): Boolean"]});
	var classes_gamma = new joint.shapes.uml.Interface({ position : { x : 440, y : 50}, size : { width : 200, height : 100}, name : "SomeInterface", attributes : ["someAttribute: String"], methods : ["+ isImplementedl(text: String): Boolean"]});
	graph.addCell(classes_alpha);
	graph.addCell(classes_beta);
	graph.addCell(classes_gamma);
	var storage = localStorage;
	var data = JSON.parse(storage.getItem("data"));
	var views = data.views;
	m3.util.LambdaX.iteri(views,function(view,index) {
		var x = index * 210 + 20;
		var y = 200;
		var attributes = [];
		m3.util.LambdaX.iteri(view.metadata,function(meta,i) {
			attributes.push(meta.label);
		});
		var queries = [];
		m3.util.LambdaX.iteri(view.metadata2.queries,function(query,i1) {
			queries.push(query.sql);
		});
		var cube = new joint.shapes.uml.Class({ position : { x : x, y : y}, size : { width : 200, height : 150}, name : view.context.name, attributes : attributes, methods : [view.data.length + " Records",queries.length + " Queries"]});
		graph.addCell(cube);
	});
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
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
