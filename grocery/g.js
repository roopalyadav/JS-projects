var count=1;

function calcTotal()
{
    tbody=document.getElementById('tbody');
    trow=document.getElementsByTagName('tr');
    
    let total=0;
    console.log("Before count "+trow.length);
    if(count>1)
    {
        tbody.deleteRow(-1);
        console.log("count "+count);
    }
    console.log("After count "+trow.length);
    for(let i=1;i<trow.length;i++)
    {
        total+=parseFloat(trow[i].cells[2].innerHTML);
    }
    let row=tbody.insertRow(trow.length);
   let cell=row.insertCell(0);
    cell.innerHTML="Grand Total";
    let cell1=row.insertCell(1);
    cell1.setAttribute("data-ns-test","grandTotal");
    cell1.innerHTML=`${total}`;
    count++;
    console.log("Last "+trow.length);
}