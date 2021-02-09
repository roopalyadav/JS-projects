


var countWord=document.getElementById("wordCount");
var word = document.getElementById("evaluatedText");
word.addEventListener("input", textWordCount);



function textWordCount(event)
{
    
    var words=word.value;
    var split = words.split(' ');
    var count=0; 
    console.log(split);
    for(var i=0;i<split.length;i++)
    {
        if(split[i]!="")
        count++;
    }
    countWord.innerHTML=count;
}