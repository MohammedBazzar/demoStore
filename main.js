console.log("May chaos take the World");
const  getProduct = async()=>{
    const {data} = await axios.get('https://dummyjson.com/products');
    return data;
}
const displayProducts = async() =>{
const data = await getProduct();
const products = data.products
const result = data.products.map(function(p){
    return `
    <a href="./details.html?id=${p.id}" target="_blank">
    <div class="product">
    <h2>${p.title}</h2>
    <img src="${p.thumbnail}" />
    <h3>${Math.round(p.price)}$</h3></a>
    

    </div>`
}).join(" ");
document.querySelector(".products").innerHTML=result;

}
displayProducts();