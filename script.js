document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const sendToAdmin = document.getElementById("send-to-admin");

    // Sample 30 Products
    const products = [
        { name: "Paracetamol", image: "images/paracetamol.jpg" },
        { name: "Ibuprofen", image: "images/ibuprofen.jpg" },
        { name: "Vitamin C", image: "images/vitamin-c.jpg" },
        { name: "Cough Syrup", image: "images/cough-syrup.jpg" },
        { name: "Antibiotics", image: "images/antibiotics.jpg" },
        { name: "Pain Reliever", image: "images/pain-reliever.jpg" },
        { name: "Bandages", image: "images/bandages.jpg" },
        { name: "Antiseptic", image: "images/antiseptic.jpg" },
        { name: "Thermometer", image: "images/thermometer.jpg" },
        { name: "Hand Sanitizer", image: "images/hand-sanitizer.jpg" }
    ];

    // Display Products on Homepage
    if (productList) {
        products.forEach((product, index) => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <button class="add-to-cart" data-index="${index}">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });

        // Add to Cart Click Event
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.dataset.index;
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(products[index]);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
                alert(`${products[index].name} added to cart!`);
            });
        });

        updateCartCount();
    }

    // Display Cart Items
    if (cartItems) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach((product, index) => {
                let cartDiv = document.createElement("div");
                cartDiv.classList.add("cart-item");
                cartDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(cartDiv);
            });

            // Add event listener to remove buttons
            document.querySelectorAll(".remove-from-cart").forEach(button => {
                button.addEventListener("click", function () {
                    let index = this.dataset.index;
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    cart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartDisplay();
                    updateCartCount();
                });
            });
        }
    }

    // Send to Admin (WhatsApp)
    if (sendToAdmin) {
        sendToAdmin.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }
            let message = "Order Details:\n";
            cart.forEach(product => {
                message += `✅ ${product.name}\n`;
            });
            window.location.href = `https://wa.me/2348065892171?text=${encodeURIComponent(message)}`;
        });
    }

    function updateCartDisplay() {
        if (cartItems) {
            cartItems.innerHTML = ""; // Clear cart
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                cartItems.innerHTML = "<p>Your cart is empty.</p>";
            } else {
                cart.forEach((product, index) => {
                    let cartDiv = document.createElement("div");
                    cartDiv.classList.add("cart-item");
                    cartDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <button class="remove-from-cart" data-index="${index}">Remove</button>
                    `;
                    cartItems.appendChild(cartDiv);
                });

                // Add event listener again after reloading cart
                document.querySelectorAll(".remove-from-cart").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        cart.splice(index, 1);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });
            }
        }
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cartCount) cartCount.textContent = cart.length;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector(".slides");

    function nextSlide() {
        index = (index + 1) % 3; // Cycle through 3 images
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
