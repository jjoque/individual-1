var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace('Donald Trump', 'Individual-1');
	    var replacedText = replacedText.replace('President Trump', 'Individual-1');
	    var replacedText = replacedText.replace('Donald J Trump', 'Individual-1');
	    var replacedText = replacedText.replace('Donald J. Trump', 'Individual-1');
	    var replacedText = replacedText.replace('DonaldTrump', 'Individual-1');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}