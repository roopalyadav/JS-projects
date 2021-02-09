var c= document.getElementsByTagName("tr");
console.log("welcome")
console.log(c[0].cells[2].innerHTML);
sum=0;
for(i=0;i<c.length;i++)
{
    sum+=parseInt(c[i].cells[2].innerHTML)
}
console.log(sum)


var node = document.getElementById("table");
row=node.insertRow(c.length);
cell=row.insertCell(0);
cell1=row.insertCell(1);
cell.innerHTML=`${c.length}`;
cell1.innerHTML=`${sum}`;
