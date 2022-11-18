let $ = document.querySelector.bind(document);

const products = [];

let ipProduct = $('#newproduct');

function addProducts() {
    let prod=products.push(ipProduct.value);
    showProducts();
    ipProduct.value = '';
    return prod;
}

function showProducts() {
    console.log(products)
    let text = ''; 
    text += `
    <table>
        <tr>
            <th colspan="3" id="productNameTitle">Product Name</th>
            <th><p id="product"><span>${products.length}</span> products</p></th>
        </tr>`;
    for(let i = 0; i < products.length; i++) {
        text += `
        <tr>
            <td id="productName-${i}">${products[i]}</td>
            <td>
                <input type="button" value="Edit" id="${i}" onclick="editProduct(this);">
            </td>
            <td>
                <input type="button" value="Delete" id="${i}" onclick="deleteProduct(this);">
            </td>
            <td></td>
        </tr>`
    }
    text += `</table>`

    document.getElementById('table-1').innerHTML = text;
}

function editProduct(option) { 
    // console.log(option.parentElement.parentElement.querySelector('#productName-' + (option.id)).textContent);
    let editValue = prompt('Nhập tên bạn muốn sửa: ');
    products[option.id] = editValue;
    showProducts();
}

function deleteProduct(option) {
    products.splice(option.id,1);
    showProducts();
}
