qx.Class.define("performance.test.widget.WidgetWithoutProtector",
{
  extend : performance.test.widget.AbstractWidget,

  members :
  {
    CREATE_ITERATIONS : 100,
    RESIZE_ITERATIONS : 50,
    DISPOSE_ITERATIONS : 100,

    _createWidget : function() {
      return new performance.test.mock.NoProtector().set({decorator: "window"});
    }
  }
});