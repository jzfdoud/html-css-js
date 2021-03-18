let sortColumn= "id"
$().ready(()=> {
    $("button").click(() => {
        getProducts();
    });
});

const getProducts = () => {
    $.getJSON("http://localhost:59525/api/products")
    .done(products => {console.log(products);
    display(products);})
    .fail( err => {console.error(err);})
}

const display = (products) => {
    let tbody = $("tbody");
    tbody.empty();
    products.sort(sortFn);
    for(let product of products) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append ($(`<td>${product.id}</td>`));
        tr.append ($(`<td>${product.partNbr}</td>`));
        tr.append ($(`<td>${product.name}</td>`));
        tr.append ($(`<td>${product.price}</td>`));
        tr.append ($(`<td>${product.unit}</td>`));
        tr.append ($(`<td>${product.photoPath}</td>`));
        // tr.append ($(`<td>${product.vendor}</td>`));
    }
}

const sortFn = (a,b) => {
    if(a[sortColumn] === b[sortColumn]) {
        return 0;
    }
    return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
}

const resort =(column) => {
    sortColumn = column;
    getProducts();
}