var contextMenuItem = {
    "id": "vaporwavise",
    "title": "Vaporwavise",
    "contexts": ["selection"]
};

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "vaporwavise" && clickData.selectionText) {
        let vaporwaveText = vaporwavise(clickData.selectionText);
        copyTextToClipboard(vaporwaveText);
    }
});

function copyTextToClipboard(text) {
    //Create a textbox field where we can insert text to. 
    var copyFrom = document.createElement("textarea");
  
    //Set the text content to be the text you wished to copy.
    copyFrom.textContent = text;
  
    //Append the textbox field into the body as a child. 
    //"execCommand()" only works when there exists selected text, and the text is inside 
    //document.body (meaning the text is part of a valid rendered HTML element).
    document.body.appendChild(copyFrom);
  
    //Select all the text!
    copyFrom.select();
  
    //Execute command
    document.execCommand('copy');
  
    //(Optional) De-select the text using blur(). 
    copyFrom.blur();
  
    //Remove the textbox field from the document.body, so no other JavaScript nor 
    //other elements can get access to this.
    document.body.removeChild(copyFrom);
  }

function vaporwavise(input) { //TODO: Update this function to work with more characters than just letters
    var tempInput = "";
    for (var i = 0; i < input.length; i++) {
        switch (input.charAt(i)) {
            case 'a':
                tempInput += 'ａ';
                break;
            case 'b':
                tempInput += 'ｂ';
                break;
            case 'c':
                tempInput += 'ｃ';
                break;
            case 'd':
                tempInput += 'ｄ';
                break;
            case 'e':
                tempInput += 'ｅ';
                break;
            case 'f':
                tempInput += 'ｆ';
                break;
            case 'g':
                tempInput += 'ｇ';
                break;
            case 'h':
                tempInput += 'ｈ';
                break;
            case 'i':
                tempInput += 'ｉ';
                break;
            case 'j':
                tempInput += 'ｊ';
                break;
            case 'k':
                tempInput += 'ｋ';
                break;
            case 'l':
                tempInput += 'ｌ';
                break;
            case 'm':
                tempInput += 'ｍ';
                break;
            case 'n':
                tempInput += 'ｎ';
                break;
            case 'o':
                tempInput += 'ｏ';
                break;
            case 'p':
                tempInput += 'ｐ';
                break;
            case 'q':
                tempInput += 'ｑ';
                break;
            case 'r':
                tempInput += 'ｒ';
                break;
            case 's':
                tempInput += 'ｓ';
                break;
            case 't':
                tempInput += 'ｔ';
                break;
            case 'u':
                tempInput += 'ｕ';
                break;
            case 'v':
                tempInput += 'ｖ';
                break;
            case 'w':
                tempInput += 'ｗ';
                break;
            case 'x':
                tempInput += 'ｘ';
                break;
            case 'y':
                tempInput += 'ｙ';
                break;
            case 'z':
                tempInput += 'ｚ';
                break;
            default:
                tempInput += input.charAt(i);
                break;
        }
    }
    return tempInput;
}