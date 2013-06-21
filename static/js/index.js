var tagRegex = /#([a-z]+)/ig;
var shortcodes =
{
  "c": "chapter"
  "r": "revision"
}

var acePostWriteDomLineHTML = function(hook, obj)
{
  var $node = $(obj.node);
  var text = $node.text();
  var matches = [];

  while (matches = tagRegex.exec(text))
  {
    var tag = matches[1];
    tag = shortcodes[tag] || tag;
    $node.addClass('osf_tag_' + tag);
  }
}

function aceEditorCSS()
{
  return ["ep_chapterBold/static/css/linestyle.css"];
}

exports.acePostWriteDomLineHTML = acePostWriteDomLineHTML;
exports.aceEditorCSS = aceEditorCSS;
