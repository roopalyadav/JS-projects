


var countWord=document.getElementById("letterCount");
var word = document.getElementById("evaluatedText");
word.addEventListener("input", textWordCount);



function textWordCount(event)
{
    
    var words=word.value;
    var split = words.split(' ');
    //var count=0; 
    console.log(words.length);
 
    countWord.innerHTML=split[split.length-1].length;
}