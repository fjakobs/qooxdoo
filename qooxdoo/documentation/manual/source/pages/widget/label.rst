.. _pages/widget/label#label:

Label
*****

The Label widget is used to display either plain text or rich text with HTML markup.

.. _pages/widget/label#preview_image:

Preview Image
-------------

|widget/label.jpg|

.. |widget/label.jpg| image:: /pages/widget/label.jpg

.. _pages/widget/label#features:

Features
--------
* Auto sizing
* Ellipsis: If the label does not fit into the widget bounds an ellipsis ("...") is rendered at the end of the label. (Only in text mode)
* "height for width": If the widget's width is too small to display the text in one line the text is wrapped and a new size hint is calculated. (Only in HTML mode)
* Configurable fonts, text colors and text alignment

.. _pages/widget/label#description:

Description
-----------

The Label supports two different modes. The text and the HTML mode. The mode can be set by using the ``rich`` property. Which mode to use depends on the required features. If possible the text mode should be preferred because in this mode the text size calculation is faster.

.. _pages/widget/label#demos:

Demos
-----
Here are some links that demonstrate the usage of the widget:

* `A label demo with differently configured labels <http://demo.qooxdoo.org/1.2.x/demobrowser/#widget~Label.html>`_
* `Height for width demo <http://demo.qooxdoo.org/1.2.x/demobrowser/#ui~HeightForWidth.html>`_
* `Label reflow <http://demo.qooxdoo.org/1.2.x/demobrowser/#ui~Label_Reflow.html>`_

.. _pages/widget/label#api:

API
---
| Here is a link to the API of the Widget:
| `qx.ui.basic.Label <http://demo.qooxdoo.org/1.2.x/apiviewer/index.html#qx.ui.basic.Label>`_

