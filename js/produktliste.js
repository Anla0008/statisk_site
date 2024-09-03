fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // Looper og kalder showProducts
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  // append
  document.querySelector("main").appendChild(copy);
}
