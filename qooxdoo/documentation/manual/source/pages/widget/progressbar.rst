.. _pages/widget/indicators#progressbar:

Progressbar
***********
The progress bar is an indicator widget.

.. _pages/widget/progressbar#preview_image:

Preview Image
-------------

|widget/progressbar.png|

.. |widget/progressbar.png| image:: /pages/widget/progressbar.png

.. _pages/widget/progressbar#description:

Description
-----------

The Progress bar is designed to simply display the current % complete for a process. It fires 2 events. When the % changes or when the process is complete.

The Value is limited between 0 and Maximum value.  It's not allowed to set a Maximum value of 0.  If you set a Maximum value bigger than 0, but smaller than Value, it will be limited to Value. 

Here's an example. We create a default progress bar (value is 0, and the maximum value is 100). We then listen to change event and complete event. The change event is fired every time the % complete is changed, so we can see the new value. If the process is 100% complete the complete event is fired.

::

    var pb = new qx.ui.indicator.Progressbar();
    this.getRoot().add(pb, { left : 20, top: 20});

    pb.addListener("change", function(e) {
      this.debug(e.getData()); // % complete
      this.debug(pb.getValue()); // absolute value 
    });

    pb.addListener("complete", function(e) {
      this.debug("complete");
    });

    //set a value
    pb.setValue(20);

.. _pages/widget/progressbar#demos:

Demos
-----
Here are some links that demonstrate the usage of the widget:

* `Simple example for the Progressbar widget <http://demo.qooxdoo.org/1.2.x/demobrowser/#widget~Progressbar.html>`_

.. _pages/widget/progressbar#api:

API
---
| Here is a link to the API of the widget:
| `qx.ui.indicator.progressbar <http://demo.qooxdoo.org/1.2.x/apiviewer/#qx.ui.indicator.progressbar>`_

