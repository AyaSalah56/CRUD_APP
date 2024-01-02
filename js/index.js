var productName = document.getElementById("Name");
var productPrice = document.getElementById("Price");
var productCat = document.getElementById("Cat");
var productDesc = document.getElementById("DESC");
var container = [];
var cartona;
var addbtn = document.getElementById("addbtn");
var updatebtn = document.getElementById("updatebtn");
var index = 0;

if (localStorage.getItem("products") != null) {
    container = JSON.parse(localStorage.getItem("products"));
    display(container);
}

function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        cat: productCat.value,
        desc: productDesc.value
    }
    container.push(product);
    localStorage.setItem("products", JSON.stringify(container));
    display(container);
    clear();
}


function clear() {
    document.getElementById("Name").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Cat").value = "";
    document.getElementById("DESC").value = "";
}

function display(arr) {
    var cartona = "";
    for (var i = 0; i < arr.length; i++) {
        cartona += `<tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].price}</td>
    <td>${arr[i].cat}</td>
    <td>${arr[i].desc}</td>
    <td><button type="button" class="btn btn-outline-warning" onclick="update(${i})">update</button></td>
    <td><button type="button" class="btn btn-outline-danger" onclick="deleteproduct(${i})">delete</button></td>
    </tr>` ;
    }
    document.getElementById("tablebody").innerHTML = cartona;
}


function deleteproduct(input) {
    container.splice(input, 1);
    localStorage.setItem("products", JSON.stringify(container));
    display(container);
}


function update(i) {
    index = i;
    addbtn.classList.replace("d-block", "d-none");
    updatebtn.classList.replace("d-none", "d-block");
    productName.value = container[i].name;
    productPrice.value = container[i].price;
    productCat.value = container[i].cat;
    productDesc.value = container[i].desc;
}
function updateProducts() {
    updatebtn.classList.replace("d-block", "d-none");
    addbtn.classList.replace("d-none", "d-block");
    container[index].name = productName.value;
    container[index].price = productPrice.value;
    container[index].cat = productCat.value;
    container[index].desc = productDesc.value;
    localStorage.setItem("products", JSON.stringify(container));
    clear();
    display(container);
}

function searchProduct(term)
{
    var matchedpro = [] ;
    for(var i=0 ; i <container.length ; i++)
    {
        if(container[i].name.toLowerCase().includes(term.toLowerCase() ) == true)
        {
            matchedpro.push(container[i]);
    
        }
    }
    display(matchedpro);
    console.log(matchedpro);
}