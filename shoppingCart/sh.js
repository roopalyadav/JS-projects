var tbody = document.getElementById('tbody');
var Name= document.getElementById('item-name-input');
var price = document.getElementById('item-price-input');

function insertItem() {
var total=0;
if(Name.value!="" && price.value!="")
{
        tbody.deleteRow(-1);
        let row=tbody.insertRow(tbody.rows.length);
        let rcell = row.insertCell(0);
        rcell.innerHTML=tbody.rows.length;
        let cell = row.insertCell(1);
        cell.setAttribute("data-ns-test","item-name");
        cell.innerHTML=Name.value;
        let cell1 = row.insertCell(2);
        cell1.setAttribute("data-ns-test","item-price");
        cell1.innerHTML=price.value;
        for(let i=0;i<tbody.rows.length;i++)
        {
            total+=parseFloat(tbody.rows[i].cells[2].childNodes.item(0).data);
        }
        let row2 = tbody.insertRow(tbody.rows.length);
        let cell0 = row2.insertCell(0);
        cell0.innerHTML=`Grand Total`;
        let rcell1 = row2.insertCell(1);
        rcell1.setAttribute("data-ns-test","grandTotal");
        rcell1.innerHTML=total;
        
    }
    Name.value="";
    price.value="";

}
