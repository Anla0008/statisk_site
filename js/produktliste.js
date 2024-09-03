fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fanger template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const kopi = template.cloneNode(true);

  //ændre indhold
  kopi.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    kopi.querySelector("article").classList.add("soldOut");
  }
  kopi.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(kopi);
}
