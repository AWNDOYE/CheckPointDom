/*récupération de la div contenant le panier et le span*/
let openShopping = document.querySelectorAll(".iconCart")
/*récupération et positionnement sur le bouton fermer*/
let closeShopping = document.querySelectorAll(".close")
/*récupération de la div contenant la liste des achats*/
let myCard = document.querySelectorAll('.card')
/*récupération de la div contenant la liste des parfums*/
let list = document.querySelectorAll(".listProducts")
console.log(openShopping, closeShopping, myCard, list)
/*Affichage de la liste des achats au clique du panier ou du bouton fermer*/
openShopping[0].addEventListener('click', () => {
    console.log(alert(5));
})
closeShopping[0].addEventListener('click', () => {
    console.log(alert(2));
})

/*déclaration tableau et stockage des produits*/
let allProducts = [
    {
        id: 1,
        name: 'KENZO',
        image: 'kenzo.jpg',
        libelle: 'KENZO FLOWER BY KENZO',
        details: 'IKEBANA - Eau de parfum 100ML',
        price: 95000
    },
    {
        id: 2,
        name: 'LANCÔME',
        image: 'lavie.jpg',
        libelle: 'LA VIE EST BELLE',
        details: 'Eau de Parfum Femme - Florale & Gourmande 100ML',
        price: 105000
    },
    {
        id: 3,
        name: 'GIVENCHY',
        image: 'givenchy.jpg',
        libelle: 'L’INTERDIT GIVENCHY',
        details: 'Coffret l’interdit Eau de parfum 100ML',
        price: 85000
    },
    {
        id: 4,
        name: 'GIORGIO ARMANI',
        image: 'si.jpg',
        libelle: 'ARMANI',
        details: 'SÌ Eau de Parfum 100ML',
        price: 75000
    },
    {
        id: 5,
        name: 'DIOR',
        image: 'dior.jpg',
        libelle: 'J’ADORE',
        details: 'Eau de Parfum vaporisateur',
        price: 120000
    },
    {
        id: 6,
        name: 'NINA RICCI',
        image: 'nina.jpg',
        libelle: 'NINA EXTRA ROUGE',
        details: 'Eau de parfum 100 ML',
        price: 100000
    },
    {
        id: 7,
        name: 'YVES SAINT LAURENT',
        image: 'opium.jpg',
        libelle: 'BLACK OPIUM',
        details: 'Eau de Parfum Vaporisateur',
        price: 150000
    },
    {
        id: 8,
        name: 'JEAN PAUL GAULTIER',
        image: 'lavie.jpg',
        libelle: 'SCANDAL',
        details: 'Eau de Parfum',
        price: 60000
    }
]/************************************************************************************************ */
/*Fonction pour charger la liste des parfums dans la variable list pointant sur la div qui doit contenir la liste des parfums*/
function listerProduits() {
    allProducts.forEach((value, key) => {
        //console.log(alert(value.name + "5"));
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', "article")
        newDiv.innerHTML = `
            <div class="tittle"> ${value.name}</div>
            <img src="${value.image}"/>
            <div class="icon">
            <i class="fa-solid fa-heart" id="like"></i>
                <i class="fa-solid fa-heart-crack" id="dislike"></i>
            </div>
            <div class="libelle">${value.libelle}</div>
            <div class="details"> ${value.details}</div>
            <div class="price">${value.price} <sup> FCFA </sup></div>
            <button onclick ="addtocard(${key})"> Ajouter au panier</button>
            
        `;
        list[0].appendChild(newDiv)
    })
}
/*<button onclick ="addtocard(${key})"> Ajouter au panier</button><button class ="myButton"> Ajouter au panier</button>*/
listerProduits()
/************************Traitement fonction sur le click du bouton ajouter au panier************ */
let tabAchats = []
let monPanier = document.querySelectorAll(".monPanierAchat")
let quantity = document.querySelectorAll("#quantite")
let totalPrice = document.querySelectorAll(".totalPrice")
/*console.log(quantity[0].innerHTML);
/*********on teste si le produit n'existe pas dans notre tableau à l'indice de la clé / on l'ajoute********************** */
function addtocard(key) {
    if (tabAchats[key] == null) {
        tabAchats[key] = allProducts[key];
        tabAchats[key].quantity = 1;
    }
    /* quantity.innerHTML = parseInt(count)
     console.log(quantity.innerHTML, count);
     console.log(("before reload"));
            console.log((tabAchats[key]));*/
    reloadCard();
}
let newQte
function changeQuantity(key, newQte) {
    let priceok = allProducts[key].price /*document.querySelectorAll(".pricePanier")*/
    /*console.log(priceok);
    console.log(newQte);*/
    if (quantity == 0) {
    } else {
      let col = document.querySelectorAll(".divPanier")
       console.log(col);
       for (let index = 0; index < col.length; index++) {
        console.log(col[index].children[3].children[1].innerHTML);
        col[index].children[3].children[1].innerHTML = newQte
        tabAchats[key].quantity.value = newQte
        quantity[0].innerHTML = newQte
       }
    }
}
function reloadCard() {
    let count = 0;
    let total = 0;
    tabAchats.forEach((value, key) => {
        monPanier.innerHTML = ``
        total = total + value.price,
            count = count + value.quantity
        /*console.log("mon panier");
        console.log(value.id);*/
        if ((value != null) && (tabAchats[key] != monPanier[key])) {
            /* console.log(("before new div"));
             console.log((tabAchats[key]));*/
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', "divPanier")
            newDiv.innerHTML = `
                <div class ="tittleCard">${value.name}</div>
                <img src="${value.image}"/>
                <div class ="pricePanier">${value.price}</div>
                <div class="btn">
                    <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                    <div id="quantite">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})"> + </button>
                </div>
            `;
            quantity[0].innerHTML = count
            totalPrice[0].innerHTML = total
            monPanier[0].appendChild(newDiv)
        }
    })
}

/******************************************************************************** */
/***********************Traitement des icônes heart  */
var icone = document.querySelectorAll(".icon");
for (let i = 0; i < icone.length; i++) {
    let like = icone[i].children[0];
    let dislike = icone[i].children[1];
    like.addEventListener("click", function () {
        like.style.color = "blue";
        dislike.style.color = "black";
    });
    dislike.addEventListener("click", function () {
        dislike.style.color = "red";
        like.style.color = "black";
    });
    /*console.log(like, dislike);*/
}
/********************************************************************************* */
