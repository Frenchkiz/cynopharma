document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const sendToAdmin = document.getElementById("send-to-admin");

    

    // All Products
    const products = [
        { name: "Paracetamol", image: "images/paracetamol.jpg" },
        { name: "Ibuprofen", image: "images/ibuprofen.jpg" },
        { name: "Vitamin C", image: "images/vitamin-c.jpg" },
        { name: "Cough Syrup", image: "images/cough-syrup.jpg" },
        { name: "Novalyn Expectorant", image: "images/novalyn_expectorant.jpg" },
        { name: "Moko Spirit", image: "images/moko_spirit.jpg" },
        { name: "Bisacure Tab", image: "images/bisacure_tab.jpg" },
        { name: "Primpex Suspension", image: "images/primpex_suspension.jpg" },
        { name: "Ncp Syrup", image: "images/ncp_syrup.jpg" },
        { name: "Emtrim Tablet", image: "images/emtrim_tablet.jpg" },
        { name: "G-Clav Suspension", image: "images/g_clav_suspension.jpg" },
        { name: "Klovinal Tablet", image: "images/klovinal_tablet.jpg" },
        { name: "Riborich Tablet", image: "images/riborich_tablet.jpg" },
        { name: "G-Clav 625 Tablet", image: "images/g_clav_625_tablet.jpg" },
        { name: "Vega 100", image: "images/vega_100.jpg" },
        { name: "Mixinal Tablet", image: "images/mixinal_tablet.jpg" },
        { name: "Piriton Syrup", image: "images/piriton_syrup.jpg" },
        { name: "Emzor Paracetamol Syrup", image: "images/emzor_paracetamol_syrup.jpg" },
        { name: "Calcimax Suspension", image: "images/calcimax_suspension.jpg" },
        { name: "Yoyo Bitter", image: "images/yoyo_bitter.jpg" },
        { name: "Loxagyl Suspension", image: "images/loxagyl_suspension.jpg" },
        { name: "Citramin Syrup", image: "images/citramin_syrup.jpg" },
        { name: "Goko Cleanser", image: "images/goko_cleanser.jpg" },
        { name: "Moko Mist Mag", image: "images/moko_mist_mag.jpg" },
        { name: "Maxiquine Syrup", image: "images/maxiquine_syrup.jpg" },
        { name: "Orheptal Tonic", image: "images/orheptal_tonic.jpg" },
        { name: "Dexorange Syrup", image: "images/dexorange_syrup.jpg" },
        { name: "7Keys", image: "images/7keys.jpg" },
        { name: "Astyfer Tonic", image: "images/astyfer_tonic.jpg" },
        { name: "Piramal Tablet", image: "images/piramal_tablet.jpg" },
        { name: "Lonart 20/120 Suspension", image: "images/lonart_20_120_suspension.jpg" },
        { name: "Em-B-Plex Emzor (100)", image: "images/em_b_plex_emzor_100.jpg" },
        { name: "Folic-Acid Emzor (100)", image: "images/folic_acid_emzor_100.jpg" },
        { name: "Lonart-DS Tab", image: "images/lonart_ds_tab.jpg" },
        { name: "Feroglobin B12", image: "images/feroglobin_b12.jpg" },
        { name: "Ciprobact", image: "images/ciprobact.jpg" },
        { name: "Mifepak Tablets", image: "images/mifepak_tablets.jpg" },
        { name: "P-Alaxin", image: "images/p_alaxin.jpg" },
        { name: "Mixagrip Tablets", image: "images/mixagrip_tablets.jpg" },
        { name: "Amatem Fort Softgel Capsules", image: "images/amatem_fort_softgel_capsules.jpg" },
        { name: "Loratadine Tablets Sivo", image: "images/loratadine_tablets_sivo.jpg" },
        { name: "Abidec Drop", image: "images/abidec_drop.jpg" },
        { name: "Sampravam-625", image: "images/sampravam_625.jpg" },
        { name: "Skipem Cream", image: "images/skipem_cream.jpg" },
        { name: "Solo-Meta B Tablet", image: "images/solo_meta_b_tablet.jpg" },
        { name: "Fesulf by 1000", image: "images/fesulf.jpg" },
        { name: "Panadol Extra Caplet", image: "images/panadol_extra_caplet.jpg" },
        { name: "Panadol Caplet", image: "images/panadol_caplet.jpg" },
        { name: "Unitrim Tablet", image: "images/unitrim_tablet.jpg" },
        { name: "Cenpain Night Tablets", image: "images/cenpain_night_tablets.jpg" },
        { name: "Emzor Paranight Tablet", image: "images/emzor_paranight_tablet.jpg" },
        { name: "Ricam Capsule", image: "images/ricam_capsule.jpg" },
        { name: "Felvin Capsule", image: "images/felvin_capsule.jpg" },
        { name: "Tetrakris Tetracycline Capsule", image: "images/tetrakris_tetracycline_capsule.jpg" },
        { name: "Tanzol Tablets", image: "images/tanzol_tablets.jpg" },
        { name: "Cipronol-TN", image: "images/cipronol_tn.jpg" },
        { name: "Fesulf by 50", image: "images/fesulf_50.jpg" },
        { name: "Maxiquine Tablets", image: "images/maxiquine_tablets.jpg" },
        { name: "Bonduretic Tablets", image: "images/bonduretic_tablets.jpg" },
        { name: "Aeroline Inhaler", image: "images/aeroline_inhaler.jpg" },
        { name: "Cimetidine Tablets", image: "images/cimetidine_tablets.jpg" },
        { name: "Ampiclox TM Beecham Capsules", image: "images/ampiclox_tm_beecham_capsules.jpg" },
        { name: "Daravit Woman", image: "images/daravit_woman.jpg" },
        { name: "Sogalis Tablets 20mg", image: "images/sogalis_tablets_20mg.jpg" },
        { name: "Andrew’s Liver Salt", image: "images/andrews_liver_salt.jpg" },
        { name: "Karaole Powder", image: "images/karaole_powder.jpg" },
        { name: "Nifecard XL 30mg Tablets", image: "images/nifecard_xl_30mg_tablets.jpg" },
        { name: "Augmentin 625mg", image: "images/augmentin_625mg.jpg" },
        { name: "Emprin 75", image: "images/emprin_75.jpg" },
        { name: "Ciprotab 500 (10)", image: "images/ciprotab_500_10.jpg" },
        { name: "Mega Powa BG", image: "images/mega_powa_bg.jpg" },
        { name: "Suprakid Syrup", image: "images/suprakid_syrup.jpg" },
        { name: "Silver Bird", image: "images/silver_bird.jpg" },
        { name: "Castor Oil", image: "images/castor_oil.jpg" },
        { name: "Gyno-Tiocosid Tioconazole 100mg", image: "images/gyno_tiocosid_tioconazole_100mg.jpg" },
        { name: "Celebrex 200mg", image: "images/celebrex_200mg.jpg" },
        { name: "Fleming 457 Suspension", image: "images/fleming_457_suspension.jpg" },
        { name: "Ventolin Inhaler", image: "images/ventolin_inhaler.jpg" },
        { name: "Wellkid Baby and Infant", image: "images/wellkid_baby_and_infant.jpg" },
        { name: "Anacin Tab", image: "images/anacin_tab.jpg" },
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
        { name: "Xasten tab", image: "images/xasten_tab.jpg" },
  { name: "Pyrantrin tablets", image: "images/pyrantrin_tablets.jpg" },
  { name: "Ascorbion by1000 vitamin c", image: "images/ascorbion_by1000.jpg" },
  { name: "Spartan c by 1000", image: "images/spartanc_by1000.jpg" },
  { name: "Bonadol caplets", image: "images/bonadol_caplets.jpg" },
  { name: "Folimop (folic acid syrup)", image: "images/folimop.jpg" },
  { name: "Em-B-Plex syrup", image: "images/em_b_plex_syrup.jpg" },
  { name: "Emzolyn 4-way syrup", image: "images/emzolyn_4way_syrup.jpg" },
  { name: "Moko iodine", image: "images/moko_iodine.jpg" },
  { name: "Novalyn dry cough", image: "images/novalyn_dry_cough.jpg" },
  { name: "KEEP-ON EMULSION", image: "images/keep_on_emulsion.jpg" },
  { name: "Admicin 500 tab", image: "images/admicin_500_tab.jpg" },
  { name: "Emzophage-500", image: "images/emzophage_500.png" },
  { name: "Foliquie +B12 by dr Mayer 100", image: "images/foliquie_b12.jpg" },
  { name: "Nifedipine dexcel 20 retard", image: "images/nifedipine_dexcel.jpg" },
  { name: "RGI loperamide capsules", image: "images/rgi_loperamide.jpg" },
  { name: "Astyfer capsules", image: "images/astyfer_capsules.jpg" },
  { name: "Kacham capsules", image: "images/kacham_capsules.jpg" },
  { name: "Lodium capsules", image: "images/lodium_capsules.jpg" },
  { name: "Amoxil 250mg becheem", image: "images/amoxil_250mg.jpg" },
  { name: "Arthrotec tab", image: "images/arthrotec_tab.jpg" },
  { name: "Menthodex mixture", image: "images/menthodex_mixture.jpg" },
  { name: "Diastop suspension", image: "images/diastop_suspension.jpg" },
  { name: "Novalyn syrup", image: "images/novalyn_syrup.jpg" },
  { name: "Oxynic tab", image: "images/oxynic_tab.jpg" },
  { name: "Moko liquid paraffin", image: "images/moko_liquid_paraffin.jpg" },
  { name: "Tuyil amoxicillin", image: "images/tuyil_amoxicillin.jpg" },
  { name: "Accu-life pregnancy test kit", image: "images/accu_life_test_kit.jpg" },
  { name: "Nifedicure tablet", image: "images/nifedicure_tablet.jpg" },
  { name: "Wormin tab", image: "images/wormin_tab.jpg" },
  { name: "Sudrex tablet", image: "images/sudrex_tablet.jpg" },
  { name: "B-Complex by 100 (dr Mayer)", image: "images/b_complex_dr_mayer.jpg" },
  { name: "Lexical-500 tab", image: "images/lexical_500_tab.jpg" },
  { name: "Camosunate tab junior 7-13yrs", image: "images/camosunate_junior.jpg" },
  { name: "Kesflox tablet", image: "images/kesflox_tablet.jpg" },
  { name: "Monover cap", image: "images/monover_cap.jpg" },
  { name: "Drujela mouth gel", image: "images/drujele_mouth_gel.jpg" },
  { name: "Zorflucan-1 caps (fluconazole 150mg)", image: "images/zorflucan_1_caps.jpg" },
  { name: "Kesflucan capsules (fluconazole 200mg)", image: "images/kesflucan_caps.jpg" },
  { name: "Swider tablets", image: "images/swider_tablets.jpg" },
  { name: "Fesulf by 100 tablets", image: "images/fesulf_100.jpg" },
    { name: "Loxagyl 200 tablets", image: "images/loxagyl_200.jpg" },
    { name: "Loxagyl 400 tablets", image: "images/loxagyl_400.jpg" },
    { name: "Pilex tablets", image: "images/pilex.jpg" },
    { name: "Unicure ciprofloxacin tablets 500mg", image: "images/unicure_ciprofloxacin_500.jpg" },
    { name: "Unicure plumal artemether 20/120", image: "images/unicure_plumal_20_120.jpg" },
    { name: "Lofnac- plus tablets", image: "images/lofnac_plus.jpg" },
    { name: "Lofnac 100 tab", image: "images/lofnac_100.jpg" },
    { name: "Unigyl 200 tab", image: "images/unigyl_200.jpg" },
    { name: "Unigyl 400 tab", image: "images/unigyl_400.jpg" },
    { name: "Exlopine Amlodipine tab 10mg", image: "images/exlopine_amlodipine_10mg.jpg" },
    { name: "Kassington Cod liver oil 1000mg", image: "images/kassington_cod_liver_1000mg.jpg" },
    { name: "Soft health Cod liver oil 300mg", image: "images/soft_health_cod_liver_300mg.jpg" },
    { name: "Ginovera multivitamin", image: "images/ginovera_multivitamin.jpg" },
    { name: "Astarclox", image: "images/astarclox.jpg" },
    { name: "Cypri gold syrup 200ml", image: "images/cypri_gold_200ml.jpg" },
    { name: "Shalina hemoforce forte tonic 200ml", image: "images/shalina_hemoforce_200ml.jpg" },
    { name: "Tuyil bunto tonic 100ml", image: "images/tuyil_bunto_100ml.jpg" },
    { name: "Vamobion children tonic 100ml", image: "images/tuyil_vamobion_100ml.jpg" },
    { name: "Tuyil Monover 100ml", image: "images/tuyil_monover_100ml.jpg" },
    { name: "Skg Rulox suspension 200ml", image: "images/skg_rulox_200ml.jpg" },
    { name: "Supermag 200mg", image: "images/supermag_200mg.jpg" },
    { name: "Supermag 100mg", image: "images/supermag_100mg.jpg" },
    { name: "Panda drop", image: "images/adrian_panda_drop.jpg" },
    { name: "Unitrim suspension", image: "images/unitrim_suspension.jpg" },
    { name: "Osworth vitamin c syrup", image: "images/osworth_vitamin_c.jpg" },
    { name: "Chemiron tonic 100ml", image: "images/chemiron_100ml.jpg" },
    { name: "Chemiron tonic 200ml", image: "images/chemiron_200ml.jpg" },
    { name: "Chemiron tonic 1liter", image: "images/chemiron_1liter.jpg" },
    { name: "Ferotal extra tonic 300ml", image: "images/ferotal_extra_300ml.jpg" },
    { name: "Hemoforce plus tonic 200ml", image: "images/hemoforce_plus_200ml.jpg" },
    { name: "Ferrotogen tonic 200ml", image: "images/ferrotogen_200ml.jpg" },
    { name: "Vami-cee syrup 100ml", image: "images/vami_cee_100ml.jpg" },
    { name: "Chemiron chemadol suspension", image: "images/chemiron_chemadol.jpg" },
    { name: "Chemiron vitamin c syrup", image: "images/chemiron_vitamin_c.jpg" },
    { name: "Ascorbion c300 100ml", image: "images/ascorbion_c300_100ml.jpg" },
    { name: "Becombion syrup 300ml", image: "images/becombion_300ml.jpg" },
    { name: "Calamine lotion 100ml", image: "images/calamine_lotion_100ml.jpg" },
    { name: "Afrab vite drop", image: "images/afrab_vite_drop.jpg" },
    { name: "Ferotal tonic 1liter", image: "images/ferotal_1liter.jpg" },
    { name: "Brustan-N syrup 100ml", image: "images/brustan_n_100ml.jpg" },
    { name: "Grape water Woodward", image: "images/grape_water_woodward.jpg" },
    { name: "Afrab vite multivitamin syrup 100ml", image: "images/afrab_vite_multivitamin_100ml.jpg" },
    { name: "Tuclox drop 90mg", image: "images/tuclox_90mg.jpg" },
    { name: "Emzor paracetamol drop", image: "images/emzor_paracetamol_drop.jpg" },
    { name: "Neofylin syrup 100ml", image: "images/neofylin_100ml.jpg" },
    { name: "Asmalyn syrup 100ml", image: "images/asmalyn_100ml.jpg" },
    { name: "Polygel 200ml", image: "images/polygel_200ml.jpg" },
    { name: "Monover tonic 200ml", image: "images/monover_200ml.jpg" },
    { name: "Mopson multivitamin", image: "images/mopson_multivitamin.jpg" },
    { name: "Emprofen syrup", image: "images/emprofen_syrup.jpg" },
    { name: "Emcap pcm suspension", image: "images/emcap_pcm.jpg" },
    { name: "Nemoxil amoxicillin suspension", image: "images/nemoxil_amoxicillin.jpg" },
    { name: "Monomin with cod liver 200ml", image: "images/monomin_cod_liver_200ml.jpg" },
    { name: "Vamiron tonic 200ml", image: "images/vamiron_200ml.jpg" },
    { name: "Nemeclox ampiclox suspension", image: "images/nemeclox_ampiclox.jpg" },
    { name: "Becomplex syrup", image: "images/becomplex_syrup.jpg" },
    { name: "Emtrim syrup", image: "images/emtrim_syrup.jpg" },
    { name: "Tutolin expectorant 100ml", image: "images/tutolin_expectorant_100ml.jpg" },
    { name: "MIM tonic 300ml", image: "images/mim_tonic_300ml.jpg" },
    { name: "Uniprof ibuprofen", image: "images/uniprof_ibuprofen.jpg" },
    { name: "Nospamin drop", image: "images/nospamin_drop.jpg" },
    { name: "Benzyl benzoate lotion", image: "images/benzyl_benzoate_lotion.jpg" },
    { name: "M&B paracetamol syrup", image: "images/mb_paracetamol_syrup.jpg" },
    { name: "Moko mist pot.cit 200ml", image: "images/moko_mist_pot_cit_200ml.jpg" },
    { name: "Moko gentian violet paint 60ml", image: "images/moko_gentian_violet_60ml.jpg" },
    { name: "Dr nando double 77keys", image: "images/dr_nando_77keys.jpg" },
    { name: "Gesteeze triple action 200ml", image: "images/gesteeze_triple_action_200ml.jpg" },
    { name: "Lorantidine syrup 60ml", image: "images/lorantidine_60ml.jpg" },
    { name: "Fimin syrup", image: "images/fimin_syrup.jpg" },
    { name: "De-Deon’s syrup 280ml", image: "images/dedeons_280ml.jpg" },
    { name: "De-Deon’s syrup 1liter", image: "images/dedeons_1liter.jpg" },
    { name: "Astymin tonic", image: "images/astymin_tonic.jpg" },
    { name: "Tanzol suspension", image: "images/tanzol_suspension.jpg" },
    { name: "Neoxican Tab", image: "images/neoxican_tab.jpg" }
        
        
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

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");

    if (searchBar) {
        searchBar.addEventListener("input", function () {
            const searchTerm = searchBar.value.toLowerCase();
            const productDivs = document.querySelectorAll(".product");

            productDivs.forEach((productDiv) => {
                const productName = productDiv.querySelector("h3").textContent.toLowerCase();

                if (productName.includes(searchTerm)) {
                    productDiv.style.display = "block"; // Show matching products
                } else {
                    productDiv.style.display = "none"; // Hide non-matching products
                }
            });
        });
    }
});
