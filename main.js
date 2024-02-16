var ProductNameInput = document.getElementById("ProductName")
var ProductPriceInput = document.getElementById("ProductPrice")
var ProductCategoryInput = document.getElementById("ProductCategory")
var ProductDescriptionInput = document.getElementById("ProductDescription")
var searchInput = document.getElementById("productSearch")
var productContainer = [];
var updateButton = document.getElementById("updateBtn")
var addButton = document.getElementById("addBtn")
var indexUpdate =0;


if (localStorage.getItem("products")!=null) {
    productContainer = JSON.parse(localStorage.getItem("products"))
    displaydata()
}


function addProduct(){

var product = {
    name:ProductNameInput.value,
    price:ProductPriceInput.value,
    category:ProductCategoryInput.value,
    desc:ProductDescriptionInput.value
}

productContainer.push(product);
localStorage.setItem("products", JSON.stringify(productContainer))
displaydata();
clearForm()

}

function displaydata() {
    var cartona = '';
    for(var i =0; i < productContainer.length; i++){
        cartona+=`  
        <tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td>
            <button class="btn button1 btn-sm" onclick=setdata(${i})>Update</button>
            <button class="btn btn-dark btn-sm" onclick=deleteProduct(${i})>Delete</button>
        </td>
        </tr>
    `
    }

    document.getElementById("tableData").innerHTML= cartona
    

}

function deleteProduct(elementNumber) {
    productContainer.splice(elementNumber, 1)
    localStorage.setItem("products", JSON.stringify(productContainer))
    displaydata()
    console.log(productContainer);
}

function searchProduct() {
    var searchData = searchInput.value

    var cartona = '';
    for(var i =0; i < productContainer.length; i++){
if (productContainer[i].name.toLowerCase().includes(searchData.toLowerCase())) {
    
        cartona+=`  
        <tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td>
            <button class="btn button1 btn-sm">Update</button>
            <button class="btn btn-dark btn-sm" onclick=deleteProduct(${i})>Delete</button>
        </td>
        </tr>
    `
    }}

    document.getElementById("tableData").innerHTML= cartona
}


function setdata(deletingElement){
    indexUpdate = deletingElement;

    curentElement = productContainer[deletingElement]

    ProductNameInput.value = curentElement.name
    ProductPriceInput.value = curentElement.price
    ProductCategoryInput.value = curentElement.category
    ProductDescriptionInput.value = curentElement.desc

    updateButton.classList.remove("d-none");
    addButton.classList.add("d-none")
}


function updateProduct() { 
    var product = {
        name:ProductNameInput.value,
        price:ProductPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescriptionInput.value
    }

    productContainer.splice(indexUpdate, 1, product)
    localStorage.setItem("products", JSON.stringify(productContainer))
    displaydata()
    updateButton.classList.add("d-none");
    addButton.classList.remove("d-none")

    clearForm()
}


function clearForm() { 
    ProductNameInput.value = ""
    ProductPriceInput.value = ""
    ProductCategoryInput.value = ""
    ProductDescriptionInput.value = ""
 }