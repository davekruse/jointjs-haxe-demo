package joint.shapes.uml;

import joint.Base;

typedef ClassOptions = {
  var name: String;
  @:optional var attributes: Array<String>;
  @:optional var methods: Array<String>;
  @:optional var position: PositionCoordinates;
  @:optional var size: RectSizeOptions;
}

extern class Uml {
  public function new(opts: ClassOptions): Void;
}