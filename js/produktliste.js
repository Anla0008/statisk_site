fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //fanger template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const kopi = template.cloneNode(true);
  const imgurl = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  kopi.querySelector("img").src = imgurl;
  kopi.querySelector("img").alt = product.productdisplayname;
  kopi.querySelector("h3").textContent = product.productdisplayname;
  kopi.querySelector(".subtle").textContent = product.usagetype;
  kopi.querySelector(".price span").textContent = product.price;
  kopi.querySelector("a").href += product.id;

  if (product.soldout) {
    kopi.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    kopi.querySelector("article").classList.add("onSale");
    kopi.querySelector(".discounted p span").textContent = Math.round(product.price - (product.price * product.discount) / 100);
    kopi.querySelector(".discounted p+p span").textContent = product.discount;
  }
  //produktet er udsolgt
  document.querySelector("main").appendChild(kopi);
}
