/*
 LGPLv3 <http://www.gnu.org/licenses/lgpl-3.0.txt>
 LGPLv3 <http://www.gnu.org/licenses/lgpl-3.0.txt>
*/
require.def("ace/mode/XmlHighlightRules", ["ace/lib/oop", "ace/mode/TextHighlightRules"], function(b, c) {
  var a = function() {
    this.$rules = {start:[{token:"text", regex:"<\\!\\[CDATA\\[", next:"cdata"}, {token:"xml_pe", regex:"<\\?.*?\\?>"}, {token:"comment", regex:"<\\!--", next:"comment"}, {token:"text", regex:"<\\/?", next:"tag"}, {token:"text", regex:"\\s+"}, {token:"text", regex:"[^<]+"}], tag:[{token:"text", regex:">", next:"start"}, {token:"keyword", regex:"[-_a-zA-Z0-9:]+"}, {token:"text", regex:"\\s+"}, {token:"string", regex:'".*?"'}, {token:"string", regex:"'.*?'"}], cdata:[{token:"text", regex:"\\]\\]>", 
    next:"start"}, {token:"text", regex:"\\s+"}, {token:"text", regex:"(?:[^\\]]|\\](?!\\]>))+"}], comment:[{token:"comment", regex:".*?--\>", next:"start"}, {token:"comment", regex:".+"}]}
  };
  b.inherits(a, c);
  return a
});
require.def("ace/mode/Xml", ["ace/lib/oop", "ace/mode/Text", "ace/Tokenizer", "ace/mode/XmlHighlightRules"], function(b, c, a, e) {
  var d = function() {
    this.$tokenizer = new a((new e).getRules())
  };
  b.inherits(d, c);
  (function() {
    this.getNextLineIndent = function(g, f) {
      return this.$getIndent(f)
    }
  }).call(d.prototype);
  return d
});