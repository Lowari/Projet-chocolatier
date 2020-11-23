function addToCart(img, nom, prixUnitaire) {
    let newTr = document.createElement('tr');
    newTr.innerHTML = `<td><img class="imgPanier" src="${img}"></td><td>${nom}</td><td class="prixUnitaire text-center">${prixUnitaire} €</td>`;
    tableCart.appendChild(newTr);
}

document.getElementById("buttonTriggerCart").onclick = function () {
    let price = document.getElementsByClassName("prixUnitaire");
    let priceArray = [...price];
    let quantite = document.getElementsByClassName("quantite");
    let total = 0;

    priceArray.forEach(element => {
        let priceValue = parseFloat(element.innerHTML.split(" ")[0]);
        console.log(priceValue);

        total += priceValue;
        document.getElementById("totalFooter").innerHTML = total + "€";
    });
};