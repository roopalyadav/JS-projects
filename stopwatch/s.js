var stopwatch=document.getElementById("stopwatch");
var hr=0;
var min=0;
var sec=0;
 var stop=true;
 var start_btn=document.getElementById("start_btn");
 var pause_btn=document.getElementById("pause_btn");
 var stop_btn=document.getElementById("stop_btn");
 
function onStart()
{
    if(stop==true)
    stop=false;
    onStartTimer();
    start_btn.disabled=true;
    pause_btn.disabled=false;
    stop_btn.disabled=false;
}

function onStartTimer()
{
    sec=parseInt(sec);
    min=parseInt(min);
    hr=parseInt(hr);
    sec=sec+1;
    if(sec==60)
    {
        min=min+1;
        sec=0;
    }
    if(min==60)
    {
        hr=hr+1;
        min=0;
        sec=0;
    }
    if(sec<10 || sec==0)
    {
        sec='0'+sec;
    }
    if(min<10 || min==0)
    {
        min='0'+min;
    }
    if(hr<10 || hr==0)
    {
        hr='0'+hr;
    }
    stopwatch.innerHTML=hr+':'+min+':'+sec;
    t=setTimeout("onStartTimer()",1000);

}

function onPause()
{
    if(stop==false)
    {
        stop==true;
    }
    clearTimeout(t);
    pause_btn.innerHTML="Continue";
    
        pause_btn.setAttribute("onClick","onContinue()");
    
    
}

function onStop()
{
    stopwatch.innerHTML=`00:00:00`;
    if(stop==false)
    {
        stop==true;
    }
    clearTimeout(t);
    hr=0;
    sec=0;
    min=0;
    start_btn.disabled=false;
    pause_btn.disabled=true;
    stop_btn.disabled=true;
    pause_btn.innerHTML="Pause";
    pause_btn.setAttribute("onClick","onPause()");
}



function onContinue()
{
    onStartTimer();
    pause_btn.innerHTML="Pause";
    pause_btn.setAttribute("onClick","onPause()");
}