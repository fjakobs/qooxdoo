/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
qx.Class.define("qx.test.ui.form.Field",
{
  extend : qx.test.ui.LayoutTestCase,

  members :
  {
    tearDown : function() {
      
    },
    
    testSelectAllBeforeFlush : function() 
    {
      var textfield = new qx.ui.form.TextField("affe");
      this.getRoot().add(textfield);
      
      textfield.focus();      
      textfield.selectAll();

      this.flush();

      // test this asynchron because opera 9.x seems to cache the creation of DOM elements
      var self = this;
      this.wait(1000, function() {
        self.assertEquals("affe", textfield.getSelection());
        textfield.destroy();        
      });
    },
    
    
    testSelectAllAfterFlush : function() 
    {
      var textfield = new qx.ui.form.TextField("affe");
      this.getRoot().add(textfield);

      textfield.focus();
      this.flush();
      
      textfield.selectAll();      

      // test this asynchron because opera 9.x seems to cache the creation of DOM elements
      var self = this;
      this.wait(1000, function() {
        self.assertEquals("affe", textfield.getSelection());
        textfield.destroy();        
      });
    },
    
    
    testClearSelectionBeforeFlush : function() 
    {
      var textfield = new qx.ui.form.TextField("affe");
      this.getRoot().add(textfield);
      
      textfield.focus();      
      textfield.selectAll();
      textfield.clearSelection()

      this.flush();
      
      // test this asynchron because opera 9.x seems to cache the creation of DOM elements
      var self = this;
      this.wait(100, function() {
        self.assertEquals("", textfield.getSelection());
        textfield.destroy();        
      });
    },
    
    
    testClearSelectionAfterFlush : function() 
    {
      var textfield = new qx.ui.form.TextField("affe");
      this.getRoot().add(textfield);

      textfield.focus();      
      this.flush();
      
      // test this asynchron because opera 9.x seems to cache the creation of DOM elements
      var self = this;
      this.wait(1000, function() {
        textfield.selectAll();
        textfield.clearSelection()
        self.assertEquals("", textfield.getSelection());
        textfield.destroy();        
      });
    }    
  }
});