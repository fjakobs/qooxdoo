.. _pages/layout/basic#basic:

Basic
*****

The Basic is used to position the children at absolute top/left coordinates.

.. _pages/layout/basic#preview_image:

Preview Image
-------------
|layout/basic.png|

.. |layout/basic.png| image:: /pages/layout/basic.png

.. _pages/layout/basic#features:

Features
--------
* Basic positioning using ``left`` and ``top`` layout properties
* Respects minimum and maximum dimensions without skrinking/growing
* Margins for top and left side (including negative margins)
* Respects right and bottom margins in the size hint
* Auto-sizing

.. _pages/layout/basic#description:

Description
-----------

The basic layout positions each child at the coordinate given by the ``left`` and ``top`` layout properties. 

The size hint of a widget configured with a Basic layout is determined such that each child can be positioned at the specified location and can have its preferred size and margin.

Margins for left and top will shift the widget position by this amount (negative values are possible). Margins for right and bottom are only respected while computing the size hint.

.. _pages/layout/basic#layout_properties:

Layout properties
-----------------
* **left**: The left coordinate in pixel (defaults to ``0``)
* **top**: The top coordinate in pixel (defaults to ``0``)

.. _pages/layout/basic#alternative_names:

Alternative Names
-----------------
* `AbsoluteLayout <http://extjs.com/deploy/dev/docs/?class=Ext.layout.AbsoluteLayout>`_ (ExtJS)

.. _pages/layout/basic#demos:

Demos
-----
Here are some links that demonstrate the usage of the layout:

* `A demo of the Basic layout <http://demo.qooxdoo.org/1.2.x/demobrowser/#layout~Basic.html>`_

.. _pages/layout/basic#api:

API
---
| Here is a link to the API of the layout manager:
| `qx.ui.layout.Basic <http://demo.qooxdoo.org/1.2.x/apiviewer/index.html#qx.ui.layout.Basic>`_

