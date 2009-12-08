/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)
     * Fabian Jakobs (fjakobs)

************************************************************************ */
 
/* ************************************************************************

#use(showcase.page.dragdrop.Content)

************************************************************************ */

qx.Class.define("showcase.page.dragdrop.Page",
{
  extend : showcase.Page,
  
  construct: function()
  {
    this.base(arguments);
    this.set({
      name: "Drag & Drop",
      part: "dragdrop",
      icon: "showcase/dragdrop/icon.png",
      contentClass: "showcase.page.dragdrop.Content",
      description: showcase.page.DescriptionBuilder.build(
        "Drag &amp; Drop",
        this.__descriptionText,
        this.__features,
        this.__manual,        
        this.__demos,
        this.__api
      )
    });
  },
  
  members : 
  {
    __demos : {
      "#data~SingleValueBinding.html" : "Single Value Binding Demo"
    },

    __api : {
      "#qx.data" : "Main Data Binding API Documentation"
    },
    
    __features : {
      "Loading Data" : "The data is loaded from twitter via JSONP."
    },
    
    
    __manual : {
      "data_binding" : "Data Binding Concepts"
    },
            
    
    __descriptionText : "TODO"
  }
});