const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const product = [
  {
    id:1,
    title: "Air Force",
    price: 119,
    colors:[
      {
        code: "black",
        img: "images/air.png",
      },
      {
        code: "darkblue",
        img: "images/air2.png",
      },
    ],
  },
  {
    id:2,
    title: "Air Jordan",
    price: 149,
    colors:[
      {
        code: "lightgray",
        img: "images/jordan.png",
      },
      {
        code: "green",
        img: "images/jordan2.png",
      },
    ],
  },
  {
    id:3,
    title: "Blazer",
    price: 109,
    colors:[
      {
        code: "lightgray",
        img: "images/blazer.png",
      },
      {
        code: "green",
        img: "images/blazer2.png",
      },
    ],
  },
  {
    id:4,
    title: "Crater",
    price: 129,
    colors:[
      {
        code: "black",
        img: "images/crater.png",
      },
      {
        code: "lightgray",
        img: "images/crater2.png",
      },
    ],
  },
  {
    id:5,
    title: "Hippie",
    price: 99,
    colors:[
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images/hippie2.png",
      },
    ],
  },
]

// console.log(product);

let choosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
  item.addEventListener("click", () => {
    // alert("you clicked" + index)
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the choosen product
    choosenProduct = product[index]

    // Change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price
    currentProductImg.src = choosenProduct.colors[0].img

    currentProductColors.forEach((color,index)=> {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener('click', (e) => {

    currentProductSizes.forEach((size, index)=>{
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    })
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

const paymentBar = document.querySelector('.payment')
const closeBtn = document.querySelector('.close')
const paybarShowBtn = document.querySelector('.productButton')
const paybarText = document.querySelector('.payInput')
const animationEle = document.querySelector('.anipay')
const checkOutBtn = document.querySelector('.payBtn')

paybarShowBtn.addEventListener('click', (e)=>{
  paymentBar.style.height = '557px';
  animationEle.style.padding = '10px 50px';
  animationEle.style.display = 'flex';
  closeBtn.style.display = 'flex';
  checkOutBtn.style.display = 'block';

})
closeBtn.addEventListener('click', (e)=>{
  paymentBar.style.height = '0';
  animationEle.style.display = 'flex';
  closeBtn.style.display = 'none';
  checkOutBtn.style.display = 'none';
  paybarText.innerHTML.input = '';

})
// paybarShowBtn.addEventListener('click', (e)=>{
//   paymentBar.style.display = 'flex';
// })
// closeBtn.addEventListener('click', (e)=>{
//   paymentBar.style.display = 'none';
//   paybarText.innerHTML.input = '';

// })