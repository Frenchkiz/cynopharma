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
        { name: "Durex", image: "images/durex.jpg" },
        { name: "Shalartem", image: "images/shalartem.jpg" },
        { name: "Bandages", image: "images/bandages.jpg" },
        { name: "Antiseptic", image: "images/antiseptic.jpg" },
        { name: "Kesartem", image: "images/kesartem.jpg" },
        { name: "Amatem", image: "images/amatem-softgel.jpg" },
        { name: "Hand Sanitizer", image: "images/hand-sanitizer.jpg" },
        { name: "Amoxicillin", image: "images/amoxicillin.jpg" },
        { name: "Ciprofloxacin", image: "images/ciprofloxacin.jpg" },
        { name: "Cetirizine", image: "images/cetirizine.jpg" },
        { name: "All Condoms", image: "images/allcondoms.jpg" },
        { name: "Arenax", image: "images/arenax.jpg" },
        { name: "Loratadine", image: "images/loratadine.jpg" },
        { name: "Multivitamins", image: "images/multivitamins.jpg" },
        { name: "Diclomol Gel", image: "images/diclomolgel.jpg" },
        { name: "Omeprazole", image: "images/omeprazole.png" },
        { name: "Loperamide", image: "images/loperamide.jpg" },
        { name: "Metformin", image: "images/metformin.jpg" },
        { name: "Aspirin", image: "images/aspirin.jpg" },
        { name: "Diclofenac", image: "images/diclofenac.jpg" },
        { name: "Losartan", image: "images/losartan.jpg" },
        { name: "Atorvastatin", image: "images/atovastatin.jpg" },
        { name: "Hydrochlorothiazide", image: "images/hydrochlorothiazide.jpg" },
        { name: "Supermag", image: "images/supermag.jpg" },
        { name: "Prednisolone", image: "images/prednisolone.jpg" },
        { name: "Azithromycin", image: "images/azithromycin.jpg" },
        { name: "Doxycycline", image: "images/doxycycline.jpg" },
        { name: "Insulin", image: "images/insulin.jpg" },
        { name: "Gestid", image: "images/gestid.jpg" },
        { name: "Salbutamol Inhaler", image: "images/salbutamol-inhaler.jpg" },
        { name: "Clotrimazole Cream", image: "images/clotrimazole-cream.jpg" },
        { name: "Miconazole", image: "images/miconazole.jpg" },
        { name: "Antacid Tablets", image: "images/antacid-tablets.jpg" },
        { name: "Camosunate", image: "images/camosunate.jpg" },
        { name: "Lonart", image: "images/lonart.jpg" },
        { name: "Ibuprofen Gel", image: "images/ibuprofen-gel.jpg" },
        { name: "Gaviscon", image: "images/gaviscon.jpg" },
        { name: "Exdryl", image: "images/exdryl.jpg" },
        { name: "Folic Acid", image: "images/folic-acid.jpg" },
        { name: "lokmal x6", image: "images/lokmal.jpg" },
        { name: "Calcium Supplements", image: "images/calcium-supplements.jpg" },
        { name: "Benylin child", image: "images/benylin.jpg" },
        { name: "Magnesium Tablets", image: "images/magnesium-tablets.jpg" },
        { name: "Zinc Lozenges", image: "images/zinc-lozenges.jpg" },
        { name: "Antihistamine Tablets", image: "images/antihistamine-tablets.jpg" },
        { name: "Eye Drops", image: "images/eye-drops.jpg" },
        { name: "Ear Drops", image: "images/ear-drops.jpg" },
        { name: "Nasal Spray", image: "images/nasal-spray.jpg" },
        { name: "Hydrocortisone Cream", image: "images/hydrocortisone-cream.jpg" },
        { name: "Sore Throat Lozenges", image: "images/sore-throat-lozenges.jpg" },
        { name: "Shaltoux", image: "images/shaltox.jpg" },
        { name: "Laxative Tablets", image: "images/laxative-tablets.jpg" },
        { name: "Anti-diarrheal Tablets", image: "images/anti-diarrheal-tablets.jpg" },
        { name: "Antifungal Powder", image: "images/antifungal-powder.jpg" },
        { name: "Chemiron tonic", image: "images/chemirontonic.jpg" },
        { name: "Bunto blood tonic", image: "images/bunto.jpg" },
        { name: "Amino Pep", image: "images/aminopep.jpg" },
        { name: "Chemiron capsule", image: "images/chemironcapsule.jpg" },
        
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
