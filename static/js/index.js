var acePostWriteDomLineHTML = function(hook, obj)
{
  var $node = $(obj.node);
  var text = $node.text();
  var isChapter = / #c(hapter)?(\s+.*)?$/.test(text);

  if(isChapter)
  {
    $node.addClass('osfBold');
  }
}

function aceEditorCSS()
{
  return ["ep_chapterBold/static/css/chapterbold.css"];
}

exports.acePostWriteDomLineHTML = acePostWriteDomLineHTML;
exports.aceEditorCSS = aceEditorCSS;
