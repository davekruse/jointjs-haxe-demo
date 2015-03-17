package joint.dia;

import m3.jq.JQ;
import joint.dia.Graph;

typedef PaperOptions = {
  @:optional var el: JQ;
  @:optional var width: Int;
  @:optional var height: Int;
  @:optional var gridSize: Int;
  @:optional var model: Graph;
}

extern class Paper {
  public function new(opts: PaperOptions):Void;
}