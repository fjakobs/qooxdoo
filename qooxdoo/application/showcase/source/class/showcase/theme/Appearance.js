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
qx.Theme.define("showcase.theme.Appearance",
{
  extend : qx.theme.modern.Appearance,

  include : [
    showcase.page.theme.calc.theme.appearance.Black,
    showcase.page.theme.calc.theme.appearance.Modern
  ],

  appearances :
  {
    "root" : 
    {    
      style : function(states)
      {
        return {
          backgroundColor: "white",
          textColor       : "text-label",
          font            : "default"          
        };
      }
    },
              
    
    "page-preview" :
    {
      alias: "listitem",
      include: "listitem",
      
      style : function(states)
      {
        return {
          iconPosition: "top",
          padding: [10, 10, 6, 10],
          gap: 7,
          decorator: null
        };
      }
    },
    
    
    "page-preview/label" :
    {
      include: "label",
      
      style : function(states)
      {
        return {
          textColor: states.selected ? "#444444" : "#F3FFD1",
          padding: [6, 15],
          decorator: states.selected ? "pane" : null,
          font: qx.bom.Font.fromConfig({
            size: 20,
            family: ["Trebuchet MS", "Lucida Grande", "Verdana", "sans-serif"],
            bold: true
          })
        };
      }
    },
    
    
    "preview-list":
    {    
      style : function(states)
      {
        return {
          backgroundColor: "#134275",
          decorator : new qx.ui.decoration.Single().set({
            bottom: [1, "solid", "black"],
            backgroundImage : "showcase/images/headerback.png"
          }),
          shadow : "shadow-window",
          zIndex : 111,
          padding: 5
        };
      }
    },
    
    "preview-list/scrollbar-x/slider" : "widget",
    "preview-list/scrollbar-x" : "widget",
    
    "preview-list/scrollbar-x/button" : 
    {
      style : function(states)
      {
        return {
          width: 0,
          height: 0
        };
      }
    },
    
    "preview-list/scrollbar-x/button-begin" : "preview-list/scrollbar-x/button",
    "preview-list/scrollbar-x/button-end" : "preview-list/scrollbar-x/button",
    
    "preview-list/scrollbar-x/slider/knob" : 
    {
      style : function(states)
      {
        return {
          decorator: new qx.ui.decoration.HBox("showcase/images/tag-hor.png"),
          opacity: states.hovered ? 0.8 : 0.4,
          height: 12
        };
      }
    },
    
    
    "separator":
    {
      style : function(states)
      {
        return {
          backgroundColor: "black",
          decorator: new qx.ui.decoration.Single().set({
            top: [1, "solid", "white"],
            bottom: [1, "solid", "white"]
          }),
          height: 7
        };
      }
    },
        
        
    "stack":
    {
      style : function(states)
      {
        return {
          // the header's shadow may block mouse events in the stack
          marginTop: qx.bom.client.Feature.CSS_POINTER_EVENTS ? 0 : 8
        };
      }
    },
            
    
    "content-container" :
    {
      style : function(states)
      {
        return {
          padding: 0
        };
      }
    },
    
    "description-box" :
    {      
      alias : "scrollarea",
      
      style : function(states)
      {
        return {
          width: 300,
          zIndex: 122,
          shadow: "shadow-window",
          contentPadding: 7,
          decorator: new qx.ui.decoration.Background().set({
            backgroundImage : "showcase/images/contentbackground.gif",
            backgroundRepeat : "repeat-y"            
          })
        };
      }
    }   
  }
});