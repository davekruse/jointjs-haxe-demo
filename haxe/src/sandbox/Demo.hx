package sandbox;

import m3.jq.JQ;
import joint.dia.Graph;
import joint.dia.Paper;
import joint.shapes.basic.Rect;
import js.html.Storage;
import haxe.Json;

using m3.util.LambdaX;

@:expose
class Demo {
  public static function main(): Void {

  }

  public static function renderDiagram(): Void {

    /*************************************************************
        Basic Paper and Canvas
    **************************************************************/

    var element: JQ = new JQ("#paper");

    var graph = new Graph();
    var paper = new Paper({
        el: element,
        width: 800,
        height: 600,
        gridSize: 10,
        model: graph
    });


    /*************************************************************
        Basic shapes
    **************************************************************/

    // basic rectangle
    var rect = new Rect({
        position: { x: 20, y: 10 },
        size: { width: 150, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'Basic Shape Rect', fill: 'white' } }
    });
    graph.addCell(rect);


    /*************************************************************
        Static UML shapes
    **************************************************************/
    var classes = {
        alpha: new joint.shapes.uml.Class({
            position: { x:20  , y: 50 },
            size: { width: 200, height: 100 },
            name: 'SomeClass',
            attributes: ['someAttribute: String'],
            methods: ['+ isAwesome(text: String): Boolean']
        }),
        beta: new joint.shapes.uml.Abstract({
            position: {x: 230, y: 50},
            size: { width: 200, height: 100},
            name: 'SomeAbstract',
            attributes: ['someAttribute: String'],
            methods: ['+ isCool(text: String): Boolean']
        }),
        gamma: new joint.shapes.uml.Interface({
            position: {x: 440, y: 50},
            size: { width: 200, height: 100},
            name: 'SomeInterface',
            attributes: ['someAttribute: String'],
            methods: ['+ isImplementedl(text: String): Boolean']
        })

    }
    graph.addCell(classes.alpha);
    graph.addCell(classes.beta);
    graph.addCell(classes.gamma);


    /*************************************************************
        Use dummy data
    **************************************************************/
    var storage = LocalStorage.get();
    var data:Dynamic = haxe.Json.parse(storage.getItem('data'));
    var views:Array<Dynamic> = data.views;

    views.iteri(function(view, index) {

        // cell coordinates
        var x = (index * 210) + 20;
        var y = 200;

        // cube attributes
        var attributes: Array<String> = [];
        m3.util.LambdaX.iteri(view.metadata, function(meta, i) {
            attributes.push(meta.label);
        });

        // cube queries (removed from example because text does not wrap in UML shapes)
        var queries: Array<String> = [];
        m3.util.LambdaX.iteri(view.metadata2.queries, function(query, i) {
            queries.push(query.sql);
        });

        var cube = new joint.shapes.uml.Class({
            position: {x: x, y: y},
            size: {width: 200, height:150},
            name: view.context.name,
            attributes: attributes,
            methods: [view.data.length + " Records", queries.length + " Queries"]
        });
        graph.addCell(cube);
    });

  }
}