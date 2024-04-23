
let products = {
    data: [
        //Videocard
      {
        productName: "Galax NVIDIA® GeForce GTX 1650 EX Plus 1-Click OC 4gb 128bit GDdr6 Gaming Videocard",
        category: "Videocard",
        price: "8,425.00",
        image: "image1.jpg",
      },
      {
        productName: "Asrock RX 6600 8G CHALLENGER D 8gb 128bit GDdr6 Dual Fan Gaming Videocard",
        category: "Videocard",
        price: "8,425.00",
        image: "image2.jpg",
      },
      {
        productName: "MSI NVIDIA® GeForce RTX 3060 Ventus 2X OC 12gb 192bit GDdr6 Gaming Videocard LHR",
        category: "Videocard",
        price: "19,150.00",
        image: "image3.jpg",
      },
      {
        productName: "MSI NVIDIA® GeForce GTX 1650 D6 Ventus XS OC/XC OC V3 4gb 128bit GDdr6 Gaming Videocard",
        category: "Videocard",
        price: "8,750.00",
        image: "image4.jpg",
      },
      {
        productName: "PNY NVIDIA® GeForce RTX 3060 VERTO Dual Fan VCG30608DFBPB1 8gb 128bit GDdr6 Gaming Videocard",
        category: "Videocard",
        price: "18,205.00",
        image: "image5.jpg",
      },
      {
        productName: "Galax NVIDIA® GeForce RTX 4070 EX-Gamer PINK 12GB 192 BIT GDDR6X 47NOM7MD7KWH Videocard",
        category: "Videocard",
        price: "39,995.00",
        image: "image6.jpg",
      },
      //Storage
      {
        productName: "Crucial P3 Plus 500GB, 1TB PCIe 4.0 Gen4 NVMe M.2 Storage Spacious Solid State Drive",
        category: "Storage",
        price: "4,495.00",
        image: "imgv1.jpg",
      },
      {
        productName: "Samsung Portable SSD T7 Shield USB 3.2 1TB or 2TB Solid State Drive",
        category: "Storage",
        price: "6,140.00",
        image: "imgv2.jpg",
      },
      {
        productName: "Samsung Portable SSD T7 Shield USB 3.2 1TB or 2TB Solid State Drive",
        category: "Storage",
        price: "6,140.00",
        image: "imgv3.jpg",
      },
      {
        productName: "Transcend TS1TSJ25H3B Shock Proof StoreJet 2.5 H3B Portable HDD 1TB Blue",
        category: "Storage",
        price: "3,630.00",
        image: "imgv4.jpg",
      },
      {
        productName: "Sandisk Ultra SDDD3-064G-G46GW Dual Drive M3.0/OTG Flashdrive Gold",
        category: "Storage",
        price: "500.00",
        image: "imgv5.jpg",
      },
      {
        productName: "Sandisk SDSQUNR-128G-GN3MN 128GB MicroSD Card",
        category: "Storage",
        price: "520.00",
        image: "imgv6.jpg",
      },
      //Power Supply
      {
        productName: "Keytech BTS 450/550/650 watts ATX Power Supply",
        category: "PowerSupply",
        price: "1,380.00",
        image: "imgps1.jpg",
      },
      {
        productName: "MSI MAG A650BN 650Watts/ A550BN 550Watts 80+ Non Modular Power Supply Bronze",
        category: "PowerSupply",
        price: "3,140.00",
        image: "imgps2.jpg",
      },
      {
        productName: "Intelligent 700 watts Dual 12V Power Supply",
        category: "PowerSupply",
        price: "385.00",
        image: "imgps3.jpg",
      },
      {
        productName: "Silverstone SST-ST50F-ES230 500 watts 80 Plus Power Supply",
        category: "PowerSupply",
        price: "1,800.00",
        image: "imgps4.jpg",
      },
      {
        productName: "Intelligent Awake AK600W 600W 80+ RGB Power Supply Bronze",
        category: "PowerSupply",
        price: "₱1,650.00",
        image: "imgps5.jpg",
      },
      {
        productName: "MSI MAG A500DN/ A600DN 500W and 600W 80+ Hydro Bearing Power Supply",
        category: "PowerSupply",
        price: "₱2,350.00",
        image: "imgps6.jpg",
      },
      //Case
      {
        productName: "InPlay Meteor 03 Mid Tower Black and White Tempered Glass Gaming Case",
        category: "Case",
        price: "992.00",
        image: "imgca1.jpg",
      },
      {
        productName: "DarkFlash DLM21 Mesh Mid Tower Black, White and Pink White PC Case",
        category: "Case",
        price: "2,095.00",
        image: "imgca2.jpg",
      },
      {
        productName: "InPlay Wind 05 and Wind 01 Acrylic Side Panel Micro ATX Durable Tempered Glass PC Case",
        category: "Case",
        price: "530.00",
        image: "imgca3.jpg",
      },
      {
        productName: "YGT V300 MAtx Tempered Glass Gaming PC Case Black",
        category: "Case",
        price: "1,325.00",
        image: "imgca4.jpg",
      },
      {
        productName: "DarkFlash C285P ATX Tempered Glass Side Panel Gaming PC Case Black",
        category: "Case",
        price: "2,850.00",
        image: "imgca5.jpg",
      },
      {
        productName: "Keytech Robin Cube Dual Chamber Micro ATX PC Case White",
        category: "Case",
        price: "1,450.00",
        image: "imgca6.jpg",
      },
      //CPU Cooler
      {
        productName: "Arctic Freezer 34 eSports DUO Grey Black/White and Black Red/White CPU Air Cooler",
        category: "CPU-Cooler",
        price: "2,530.00",
        image: "imgcc1.jpg",
      },
      {
        productName: "Deepcool Gammaxx AG200 Single Tower Efficient Cooling Power CPU Air Cooler",
        category: "CPU-Cooler",
        price: "565.00",
        image: "imgcc2.jpg",
      },
      {
        productName: "Deepcool LS520 SE Digital 240mm ARGB liquid cooling black",
        category: "CPU-Cooler",
        price: "4,435.00",
        image: "imgcc3.jpg",
      },
      {
        productName: "Deepcool Gammaxx AG400 PLUS Single Tower Bearing Type Hydro Bearing CPU Air Cooler",
        category: "CPU-Cooler",
        price: "1,230.00",
        image: "imgcc4.jpg",
      },
      {
        productName: "Dark Flash Dr12 Pro 120mm Double Light Ring Design Single Fan",
        category: "CPU-Cooler",
        price: "230.00",
        image: "imgcc5.jpg",
      },
      {
        productName: "Jonsbo CR-1400 EVO ARGB CPU Air Cooler Black",
        category: "CPU-Cooler",
        price: "820.00",
        image: "imgcc6.jpg",
      },
      //CPU
      {
        productName: "Intel Core i7-12700 Alder Lake Socket LGA 1700 4.90GHz Processor",
        category: "CPU",
        price: "21,550.00",
        image: "imgcore1.jpg",
      },
      {
        productName: "Intel Core I5-12400F Alder Lake Socket 1700 2.5GHz Processor",
        category: "CPU",
        price: "7,785.00",
        image: "imgcore2.jpg",
      },
      {
        productName: "Intel Core I5-12400 Alder Lake Socket 1700 2.5GHz Processor",
        category: "CPU",
        price: "12,199.00",
        image: "imgcore3.jpg",
      },
      {
        productName: "AMD Ryzen 5 4500 Socket Am4 3.6GHz box processor",
        category: "CPU",
        price: "4,800.00",
        image: "imgcore4.jpg",
      },
      {
        productName: "AMD Ryzen 5 5600 Socket Am4 3.5GHz 6 cores | 12 Threads Desktop Processor",
        category: "CPU",
        price: "7,550.00",
        image: "imgcore5.jpg",
      },
      {
        productName: "AMD Ryzen 7 5700X Socket AM4 3.7GHz Processor",
        category: "CPU",
        price: "10,200.00",
        image: "imgcore6.jpg",
      },
      //Memory
      {
        productName: "Team Elite Vulcan TUF 16gb 2x8 3200mhz Ddr4 Gaming Memory",
        category: "Memory",
        price: "3,652.00",
        image: "imgm1.jpg",
      },
      {
        productName: "Team Elite Plus 8gb 1x8 3200Mhz Black Gold Ddr4 Memory",
        category: "Memory",
        price: "1,719.00",
        image: "imgm2.jpg",
      },
      {
        productName: "Team Elite TForce Delta 16gb 2x8 3200mhz Ddr4 RGB Memory White",
        category: "Memory",
        price: "4,454.00",
        image: "imgm3.jpg",
      },
      {
        productName: "Kingston Fury Beast 8GB 1x8 3200MT/s Ddr4 Memory Black",
        category: "Memory",
        price: "2,050.00",
        image: "imgm4.jpg",
      },
      {
        productName: "Lexar Thor 8GB LD4BU008G-R3200GSXG 1x8 3200Mhz DDR4 Memory Dark Grey",
        category: "Memory",
        price: "970.00",
        image: "imgm5.jpg",
      },
      {
        productName: "Team Elite TForce Delta 16gb 1x16 3200mhz Ddr4 RGB Memory White",
        category: "Memory",
        price: "3,995.00",
        image: "imgm6.jpg",
      },
      //Peripherals
      {
        productName: "Fantech HG21 Hexagon 7.1 Gaming Headset",
        category: "Peripherals",
        price: "870.00",
        image: "imgkey1.jpg",
      },
      {
        productName: "RAKK PRIYO Trimode Removable Microphone Gaming Headset Black",
        category: "Peripherals",
        price: "1,895.00",
        image: "imgkey2.jpg",
      },
      {
        productName: "RAKK Aptas V2 Laser-etched ABS Keycaps, Gaming keyboard, Anti-flex plate, Soft braided cable Keyboard and Mouse Bundle",
        category: "Peripherals",
        price: "395.00",
        image: "imgkey3.jpg",
      },
      {
        productName: "Ovation BTS KF 2in1 RGB Mechanical Keyboard and Mouse Black",
        category: "Peripherals",
        price: "935.00",
        image: "imgkey4.jpg",
      },
      {
        productName: "Ovation ACC 2in1 Kit RGB Keyboard and Mouse Combo White",
        category: "Peripherals",
        price: "290.00",
        image: "imgkey5.jpg",
      },
      {
        productName: "RAKK PIRAH PLUS 66 Keys Universal HotSwap Mechanical Gaming Keyboard",
        category: "Peripherals",
        price: "2,995.00",
        image: "imgkey6.jpg",
      },
      //Motherboard
      {
        productName: "Asrock B450M Steel Legend Am4 Gaming Motherboard",
        category: "Motherboard",
        price: "5,800.00",
        image: "imgmo1.jpg",
      },
      {
        productName: "Gigabyte B550M DS3H Socket Am4 Ddr4 Motherboard",
        category: "Motherboard",
        price: "5,345.00",
        image: "imgmo2.jpg",
      },
      {
        productName: "Asus Prime A520M-K Socket AM4 Ddr4Gaming Motherboard",
        category: "Motherboard",
        price: "3,650.00",
        image: "imgmo3.jpg",
      },
      {
        productName: "MSI B450M Pro VDH Max Socket Am4 Ddr4 Motherboard",
        category: "Motherboard",
        price: "4,375.00",
        image: "imgmo4.jpg",
      },
      {
        productName: "Biostar A520MH 3.1 socket AM4 DDR4 Motherboard",
        category: "Motherboard",
        price: "2,870.00",
        image: "imgmo5.jpg",
      },
      {
        productName: "MSI A520m Pro AMD Am4 Ddr4 Micro-ATX PCB Gaming Motherboard",
        category: "Motherboard",
        price: "3,250.00",
        image: "imgmo6.jpg",
      },
      //Monitor
      {
        productName: "MSI Optix G241V E2 23.8 75Hz 1ms IPS Freesync Monitor",
        category: "Monitor",
        price: "9,195.00",
        image: "imgmon1.jpg",
      },
      {
        productName: "MSI Pro MP242P 23.8 75Hz IPS Monitor",
        category: "Monitor",
        price: "9,185.00",
        image: "imgmon2.jpg",
      },
      {
        productName: "MSI Pro MP223 21.5 100Hz VA Monitor",
        category: "Monitor",
        price: "4,020.00",
        image: "imgmon3.jpg",
      },
      {
        productName: "MSI Modern MD241P 23.8 75Hz IPS Monitor",
        category: "Monitor",
        price: "9,995.00",
        image: "imgmon4.jpg",
      },
      {
        productName: "Nvision ES32G2 31.5 165Hz VA Curved Gaming Monitor",
        category: "Monitor",
        price: "9,470.00",
        image: "imgmon5.jpg",
      },
      {
        productName: "SpecterPro G27SL 27 IPS 75Hz Freesync Gaming Monitor",
        category: "Monitor",
        price: "6,795.00",
        image: "imgmon6.jpg",
      },

    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container-0");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h5");
    price.innerText = "₱" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

  //button
    let btn = document.createElement("button");
    btn.innerText = "Add Build";
    name.innerText = i.productName.toUpperCase();
    container.appendChild(btn);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    //transfer to other page
    btn.addEventListener('click', function(e) {
      e.preventDefault();

      let btnvalue = name.innerText;
      let btnvalue1 = name.innerText;

      
      localStorage.setItem('text1', btnvalue);
      localStorage.setItem('text2', btnvalue1);
      localStorage.setItem('text3', btnvalue);
      localStorage.setItem('text4', btnvalue);
      localStorage.setItem('text5', btnvalue);
      localStorage.setItem('text6', btnvalue);
      localStorage.setItem('text7', btnvalue);
      localStorage.setItem('text8', btnvalue);
      localStorage.setItem('text9', btnvalue);
      localStorage.setItem('text10', btnvalue);

      window.location.href = "Completed build.html";
    })
  };


  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //javascript for nav bar effect on scroll
  window.addEventListener("scroll", function(){
    let main = document.querySelector("main");
    main.classList.toggle('sticky', window.scrollY > 0);
  });
    



/*
  let listProductHTML = document.querySelector('.listProduct');
  let listCartHTML = document.querySelector('.listCart');
  let iconCart = document.querySelector('.icon-cart');
  let iconCartSpan = document.querySelector('.icon-cart span');
  let body = document.querySelector('body');
  let closeCart = document.querySelector('.close');
  let products = [];
  let cart = [];
  
  
  iconCart.addEventListener('click', () => {
      body.classList.toggle('showCart');
  })
  closeCart.addEventListener('click', () => {
      body.classList.toggle('showCart');
  })
  
      const addDataToHTML = () => {
      // remove datas default from HTML
  
          // add new datas
          if(products.length > 0) // if has data
          {
              products.forEach(product => {
                  let newProduct = document.createElement('div');
                  newProduct.dataset.id = product.id;
                  newProduct.classList.add('item');
                  newProduct.innerHTML = 
                  `<img src="${product.image}" alt="">
                  <h2>${product.name}</h2>
                  <div class="price">$${product.price}</div>
                  <button class="addCart">Add To Cart</button>`;
                  listProductHTML.appendChild(newProduct);
              });
          }
      }
      listProductHTML.addEventListener('click', (event) => {
          let positionClick = event.target;
          if(positionClick.classList.contains('addCart')){
              let id_product = positionClick.parentElement.dataset.id;
              addToCart(id_product);
          }
      })
  const addToCart = (product_id) => {
      let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
      if(cart.length <= 0){
          cart = [{
              product_id: product_id,
              quantity: 1
          }];
      }else if(positionThisProductInCart < 0){
          cart.push({
              product_id: product_id,
              quantity: 1
          });
      }else{
          cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
      }
      addCartToHTML();
      addCartToMemory();
  }
  const addCartToMemory = () => {
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  const addCartToHTML = () => {
      listCartHTML.innerHTML = '';
      let totalQuantity = 0;
      if(cart.length > 0){
          cart.forEach(item => {
              totalQuantity = totalQuantity +  item.quantity;
              let newItem = document.createElement('div');
              newItem.classList.add('item');
              newItem.dataset.id = item.product_id;
  
              let positionProduct = products.findIndex((value) => value.id == item.product_id);
              let info = products[positionProduct];
              listCartHTML.appendChild(newItem);
              newItem.innerHTML = `
              <div class="image">
                      <img src="${info.image}">
                  </div>
                  <div class="name">
                  ${info.name}
                  </div>
                  <div class="totalPrice">$${info.price * item.quantity}</div>
                  <div class="quantity">
                      <span class="minus"><</span>
                      <span>${item.quantity}</span>
                      <span class="plus">></span>
                  </div>
              `;
          })
      }
      iconCartSpan.innerText = totalQuantity;
  }
  
  listCartHTML.addEventListener('click', (event) => {
      let positionClick = event.target;
      if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
          let product_id = positionClick.parentElement.parentElement.dataset.id;
          let type = 'minus';
          if(positionClick.classList.contains('plus')){
              type = 'plus';
          }
          changeQuantityCart(product_id, type);
      }
  })
  const changeQuantityCart = (product_id, type) => {
      let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
      if(positionItemInCart >= 0){
          let info = cart[positionItemInCart];
          switch (type) {
              case 'plus':
                  cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                  break;
          
              default:
                  let changeQuantity = cart[positionItemInCart].quantity - 1;
                  if (changeQuantity > 0) {
                      cart[positionItemInCart].quantity = changeQuantity;
                  }else{
                      cart.splice(positionItemInCart, 1);
                  }
                  break;
          }
      }
      addCartToHTML();
      addCartToMemory();
  }
  
  const initApp = () => {
      // get data product
      fetch('products.json')
      .then(response => response.json())
      .then(data => {
          products = data;
          addDataToHTML();
  
          // get data cart from memory
          if(localStorage.getItem('cart')){
              cart = JSON.parse(localStorage.getItem('cart'));
              addCartToHTML();
          }
      })
  }
  initApp();
  */