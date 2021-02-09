// your JS here

var resetButton=document.getElementById("reset_button");
var changeButton=document.getElementById("change_button");

changeButton.addEventListener("click", changeColor);
resetButton.addEventListener("click", resetColor);

function changeColor()
{
    var inputId=document.getElementById("block_id").value;
 var inputColor=document.getElementById("colour_id").value;
 if(inputId>=1 && inputId<=9)
    document.getElementById(inputId).style.backgroundColor=inputColor;
else
alert("Id cannot exceed 9");
    
}

function resetColor()
{
    for(let i=1;i<=9;i++)
    {
        document.getElementById(i).style.backgroundColor="transparent";
    }
}