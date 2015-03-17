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
    trace("render diagram");

    var element: JQ = new JQ("#paper");

    var graph = new Graph();
    var paper = new Paper({
      el: element,
      width: 600,
      height: 600,
      gridSize: 10,
      model: graph
    });

    var rect = new Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'Demo 1', fill: 'white' } }
    });
    graph.addCell(rect);
  }
}