let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let pin = document.getElementById("pin");
let gender = document.getElementById("gender");
let food = document.getElementById("food");
let state = document.getElementById("state");
let country = document.getElementById("country");

let submit = document.getElementById("submit");
submit.addEventListener("click",function(e){
    e.preventDefault();
    let add = [];
    add.push(add1.value);
    add.push(add2.value);

    let address = add.join(" ");

    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gch="";
    if(male.checked)
    {
        gch = "Male";
    }
    else{
        gch = "Female";
    }


    let food = document.getElementsByName("food");
    let farr = [];
    let res;
    for(let i = 0 ;i<food.length;i++)
    {
        if(food[i].checked)
        {
            farr.push(food[i].value);
        }
    }
    if(farr.length>=2)
    {
        res = farr.join(",");
    }
    else
    {
        res = alert("Choose any 2 food items");
    }

    createTable(fname.value,lname.value,address,pin.value,gch,res,state.value,country.value);

    fname.value = "";
    lname.value = "";
    add1.value = "";
    add2.value = "";
    pin.value = "";
    male.checked = false;
    female.checked = false;
    document.getElementById("food1").checked = false;
    document.getElementById("food2").checked = false;
    document.getElementById("food3").checked = false;
    document.getElementById("food4").checked = false;
    document.getElementById("food5").checked = false;
    state.value = "";
    country.value = "";
})


function createTable(fname,lname,address,pin,gender,food,state,country)
{
    let tbody =document.getElementById("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");

    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pin;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
}