// https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProdukt(data));

function showProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".purchaseBox h3").textContent = produkt.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = produkt.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
}
