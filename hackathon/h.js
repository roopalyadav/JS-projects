function update()
{
    var name=document.getElementById("name");
    var year=document.getElementById("year");
    var hd=document.querySelector("h3");
    
    if(name.value!="" && year.value!="")
    {
        hd.innerHTML=`https://localhost:8080/?name=${name.value}&year=${year.value}`;
        console.log(hd.innerHTML);
    }
    else if(name.value=="" && year.value!="")
    {
        hd.innerHTML=`https://localhost:8080/?year=${year.value}`;
        console.log(hd);
    }
   else if(name.value!="" && year.value=="")
    {
        hd.innerHTML=`https://localhost:8080/?name=${name.value}`;
        
    }
    else
    hd.innerHTML=`https://localhost:8080/`;
    name.value="";
    year.value="";
}