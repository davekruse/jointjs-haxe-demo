package joint.shapes.basic;

typedef PositionCoordinates = {
  var x: Int;
  var y: Int;
}

typedef RectSizeOptions = {
  var width: Int;
  var height: Int;
}

typedef RectOptions = {
  @:optional var position: PositionCoordinates;
  @:optional var size: RectSizeOptions;
  @:optional var attrs: Dynamic;
}

extern class Rect {
  public function new(opts: RectOptions):Void;
}