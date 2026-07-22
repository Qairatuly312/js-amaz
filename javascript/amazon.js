const productsGrid = document.querySelector(".products-grid");


const products = [
    {
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
    },
    {
        image: "images/products/intermediate-composite-basketball.jpg",
        name: "Intermediate Size Basketball",
        rating: {
            stars: 4.0,
            count: 127
        },
        priceCents: 2095,
    },
    {
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
            stars: 4.5,
            count: 56
        },
        priceCents: 799,
    },
];

const productQuantity = [1,2,3,4,5,6,7,8,9,10]

products.forEach(product => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    const productImageContainer = document.createElement("div");
    productImageContainer.classList.add("product-image-container");

    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = product.image;

    productImageContainer.appendChild(productImage);

    const productNameContainer = document.createElement("div");
    productNameContainer.classList.add("product-name", "limit-text-to-2-lines");
    productNameContainer.textContent = product.name;

    const productRatingContainer = document.createElement("div");
    productRatingContainer.classList.add("product-rating-container");

    const productRatingImage = document.createElement("img");
    productRatingImage.classList.add("product-rating-stars")
    productRatingImage.src = `images/ratings/rating-${product.rating.stars*10}.png`;

    const productRatingCount = document.createElement("div");
    productRatingCount.classList.add("product-rating-count", "link-primary");
    productRatingCount.textContent = product.rating.count;

    productRatingContainer.appendChild(productRatingImage);
    productRatingContainer.appendChild(productRatingCount);

    const productPrice = document.createElement("div");
    productPrice.classList.add("product-price");
    productPrice.textContent = `$${(product.priceCents / 100).toFixed(2)}`;

    const productQuantityContainer =document.createElement("div");
    productQuantityContainer.classList.add("product-quantity-container");

    const productQuantitySelect = document.createElement("select");
    productQuantity.forEach(number => {
        const productQuantityOption = document.createElement("option");

        productQuantityOption.textContent = number;
        productQuantityOption.value = number;


        if (number === 1) {
            productQuantityOption.selected = true;
        }
        productQuantitySelect.appendChild(productQuantityOption);
    });

    productQuantityContainer.appendChild(productQuantitySelect)

    const productSpaces = document.createElement("div");
    productSpaces.classList.add("product-spacer")

    const addedToCartContainer = document.createElement("div");
    addedToCartContainer.classList.add("added-to-cart");
    addedToCartContainer.innerHTML = `<img src="images/icons/checkmark.png" alt="">
Added`

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-button", "button-primary");
    addToCartButton.textContent='Add to Cart'

    productContainer.append(
        productImageContainer,
        productNameContainer,
        productRatingContainer,
        productPrice,
        productQuantityContainer,
        productSpaces,
        addedToCartContainer,
        addToCartButton
    );

    productsGrid.appendChild(productContainer);
})
