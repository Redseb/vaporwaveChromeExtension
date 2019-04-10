var inputBox = document.getElementById("input");
var outputTag = document.getElementById("output");
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function () { vaporwavise(inputBox.value) }, false);

function vaporwavise(input) {
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
    outputTag.value = tempInput;

      /* Select the text field */
    outputTag.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
}