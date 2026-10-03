let quantity = 1;
let carte = []
const catalog = {
    headphones: {
        price: 56.50,
        description: "nothing bleutooth headphones",
        image: "./download (3).jpg"
    },
    keyboard: {
        price: 70,
        description: "whooting red switch keyboard",
        image: "./632052129002034838.jpg"
    },
    controller: {
        price: 170,
        description: "scuf gaming ps5 controller",
        image: "./download (4).jpg"
    },
    mouse: {
        price: 40,
        description: "razer light weight mouse",
        image: "./Razer Viper Mini Signature Edition.jpg"
    },
    laptop: {
        price: 2100,
        description: "asus rog gaming laptop",
        image: "./ASUS ROG Zephyrus G Series Gaming Laptops Unveiled With RTX 5090.jpg"
    },
    car: {
        price: 28000,
        description: "2026 porsche taican",
        image: "./4855512095025928.jpg"
    },
    workstation: {
        price: 3000,
        description: "nvidia work station",
        image: "./136 921р.jpg"
    },
    console: {
        price: 799,
        description: "ps6",
        image: "./438749188702715812.jpg"
    },
    tv: {
        price: 1099,
        description: "samsung oled tv",
        image: "./Samsung QE55S90FAEXZT Vision AI.jpg"
    },
    phone: {
        price: 1200,
        description: "samsung galaxy s26 ultra",
        image: "./SIM Free Samsung Galaxy S26 Ultra 5G 1TB AI Phone - Black.jpg"
    },
    studentHeadphones: {
        price: 28.25,
        description: "nothing bleutooth headphones",
        image: "./download (3).jpg"
    },
    studentKeyboard: {
        price: 35,
        description: "whooting red switch keyboard",
        image: "./632052129002034838.jpg"
    },
    studentController: {
        price: 85,
        description: "scuf gaming ps5 controller",
        image: "./download (4).jpg"
    },
    studentMouse: {
        price: 20,
        description: "razer light weight mouse",
        image: "./Razer Viper Mini Signature Edition.jpg"
    },
    studentLaptop: {
        price: 1050,
        description: "asus rog gaming laptop",
        image: "./ASUS ROG Zephyrus G Series Gaming Laptops Unveiled With RTX 5090.jpg"
    },
    studentCar: {
        price: 14000,
        description: "2026 porsche taican",
        image: "./4855512095025928.jpg"
    },
    studentWorkstation: {
        price: 1500,
        description: "nvidia work station",
        image: "./136 921р.jpg"
    },
    studentConsole: {
        price: 400,
        description: "ps6",
        image: "./438749188702715812.jpg"
    },
    studentTv: {
        price: 549.5,
        description: "samsung oled tv",
        image: "./Samsung QE55S90FAEXZT Vision AI.jpg"
    },
    studentPhone: {
        price: 600,
        description: "samsung galaxy s26 ultra",
        image: "./SIM Free Samsung Galaxy S26 Ultra 5G 1TB AI Phone - Black.jpg"
    }
};

function buyProduct(id) {
    window.location.href = `template.html?id=${id}`;
}

if(document.getElementById("product-image")){
    // your template fill code here
    const productImage = document.getElementById("product-image");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = catalog[id];
    
    
    productImage.src = product.image;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = `$${product.price}` ;
function addone(){
quantity++;
document.getElementById("quant").innerHTML = quantity;
productPrice.innerHTML = `$${product.price * quantity}`;
}
function rmoveone(){
if (quantity >= 2){
    quantity = quantity - 1;
} 
document.getElementById("quant").innerHTML = quantity;
productPrice.innerHTML = `$${product.price * quantity}` ;
}
}
        
        
function confirmation() {
    window.location.href = "payment-method.html";
}

function addone(){
quantity++;
document.getElementById("quant").innerHTML = quantity;
productPrice.innerHTML = `$${product.price * quantity}`;
}
function rmoveone(){
if (quantity >= 2){
    quantity = quantity - 1;
} 
document.getElementById("quant").innerHTML = quantity;
productPrice.innerHTML = `$${product.price * quantity}` ;
}


function cartcnt(){
var cartq = document.getElementById("span").textContent;
cartq++;
document.getElementById("span").innerHTML = cartq;
}

function cart(id){
    carte.push(id);
    localStorage.setItem("carte", JSON.stringify(carte));


}
if(document.getElementById("cart-container")){
    const cartContainer = document.getElementById("cart-container");
    const summaryItems = document.getElementById("cart-summary-items");
    const totalText = document.getElementById("cart-total");
    const cartCount = document.getElementById("span");
    document.getElementById("cart-checkout-button").addEventListener("click", () => {
        window.location.href = "payment-method.html";
    });
    const cartItems = (JSON.parse(localStorage.getItem("carte")) || [])
        .map((itemId) => ({ id: itemId, quantity: 1 }))
        .filter((item) => catalog[item.id]);

    function updateCartSummary() {
        summaryItems.replaceChildren();
        let total = 0;

        cartItems.forEach((item) => {
            const product = catalog[item.id];
            const lineTotal = product.price * item.quantity;
            total += lineTotal;

            const summaryItem = document.createElement("li");
            summaryItem.textContent = `${product.description} x ${item.quantity} - $${lineTotal}`;
            summaryItems.appendChild(summaryItem);
        });

        if (cartItems.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "Your cart is empty.";
            summaryItems.appendChild(emptyMessage);
        }

        totalText.textContent = `Total: $${total}`;
        cartCount.textContent = cartItems.length;
    }

    function renderCart() {
        cartContainer.replaceChildren();

        cartItems.forEach((item, index) => {
            const product = catalog[item.id];
            const card = document.createElement("div");
            card.className = "cart-item product-card";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.description}" />
                <div class="product-info">
                    <p data-role="description">${product.description}</p>
                    <div class="cont">
                        <button class="c" type="button" data-action="increase">+</button>
                        <p data-role="quantity">${item.quantity}</p>
                        <button type="button" data-action="decrease">-</button>
                    </div>
                    <p data-role="price">$${product.price * item.quantity}</p>
                    <button class="btns" type="button" data-action="remove">Remove</button>
                </div>
            `;

            const quantityElement = card.querySelector('[data-role="quantity"]');
            const priceElement = card.querySelector('[data-role="price"]');

            card.querySelector('[data-action="increase"]').addEventListener("click", () => {
                item.quantity++;
                quantityElement.textContent = item.quantity;
                priceElement.textContent = `$${product.price * item.quantity}`;
                updateCartSummary();
            });

            card.querySelector('[data-action="decrease"]').addEventListener("click", () => {
                if (item.quantity > 1) item.quantity--;
                quantityElement.textContent = item.quantity;
                priceElement.textContent = `$${product.price * item.quantity}`;
                updateCartSummary();
            });

            card.querySelector('[data-action="remove"]').addEventListener("click", () => {
                cartItems.splice(index, 1);
                localStorage.setItem("carte", JSON.stringify(cartItems.map((cartItem) => cartItem.id)));
                renderCart();
            });

            cartContainer.appendChild(card);
        });

        if (cartItems.length === 0) {
            const emptyMessage = document.createElement("div");
            emptyMessage.className = "product-card cart-empty-message";
            emptyMessage.textContent = "Your cart is empty.";
            cartContainer.appendChild(emptyMessage);
        }

        updateCartSummary();
    }

    renderCart();



















}
























