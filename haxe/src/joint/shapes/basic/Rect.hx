package joint.shapes.basic;

import joint.Base;

typedef RectOptions = {
  @:optional var position: PositionCoordinates;
  @:optional var size: RectSizeOptions;
  @:optional var attrs: Dynamic;
}

extern class Rect {
  public function new(opts: RectOptions):Void;
}