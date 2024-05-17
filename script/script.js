const items = document.querySelector(".items");
const zer = document.querySelector(".zer");
let oper =document.querySelector(".oper");
let bag ;

// Populate the cart page
onLoad();
function onLoad(){
   // localStorage.clear('item');
    let badstr=localStorage.getItem('item');
    bag=badstr?JSON.parse(badstr):[];
    
    cartPage();
    addcart();

}


   
    


function cartPage() {
   if(!items)return;//agr items nhu mile to santi se return ho jao
    Products.forEach(product => {
        const productHTML = `
        <div class="a2">
            <img class="img" src="${product.Image}" alt="">
            <div class="bota2">
                <h3>${product.Name}</h3>
                <p>${product.Cont}</p>
                <div class="buta2">
                    <h3>₹${product.Price}</h3>
                    <i class="fa-solid fa-heart icon"></i>
                    <i class="fa-solid fa-cart-shopping icon" onclick="add(${product.id});"></i>
                </div>
            </div>
        </div>`;
        items.innerHTML += productHTML;
    });
}

function add(productId) {
    bag.push(productId);
    localStorage.setItem("item",JSON.stringify(bag));
    addcart();
}

function addcart() {
    if (bag.length > 0) {
        zer.innerHTML = bag.length;
        zer.style.visibility = "visible"; // Set visibility to "visible" when bag length > 0
        oper.innerHTML = `${bag.length} Items added`;
        oper.style.visibility = "visible";
        oper.style.opacity = "1";

        // Hide the message after 2 seconds
        setTimeout(function() {
            oper.style.opacity = "0";
            setTimeout(function() {
                oper.style.visibility = "hidden";
            }, 500); // Delay hiding until transition ends (500 milliseconds)
        }, 2000); // 2000 milliseconds = 2 seconds
    } else {
        zer.style.visibility = "hidden";
        oper.style.visibility = "hidden";
    }
}

