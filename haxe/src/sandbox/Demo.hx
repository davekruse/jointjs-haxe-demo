package sandbox;

import m3.jq.JQ;
import joint.dia.Graph;
import joint.dia.Paper;
import joint.shapes.basic.Rect;

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
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'Demo 1', fill: 'white' } }
    });
    graph.addCell(rect);


    /*************************************************************
        Static UML shapes
    **************************************************************/
    var classes = {
        alpha: new joint.shapes.uml.Class({
            position: { x:20  , y: 190 },
            size: { width: 200, height: 100 },
            name: 'SomeClass',
            attributes: ['someAttribute: String'],
            methods: ['+ isAwesome(text: String): Boolean']
        }),
        beta: new joint.shapes.uml.Abstract({
            position: {x: 230, y: 190},
            size: { width: 200, height: 100},
            name: 'SomeAbstract',
            attributes: ['someAttribute: String'],
            methods: ['+ isCool(text: String): Boolean']
        }),
        gamma: new joint.shapes.uml.Interface({
            position: {x: 440, y: 190},
            size: { width: 200, height: 100},
            name: 'SomeInterface',
            attributes: ['someAttribute: String'],
            methods: ['+ isImplementedl(text: String): Boolean']
        })

    }

    graph.addCell(classes.alpha);
    graph.addCell(classes.beta);
    graph.addCell(classes.gamma);

  }
}