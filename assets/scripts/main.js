
// const mainImage = document.getElementById('single-product-main-image');
// const subImages = document.querySelectorAll('.small-image');

// subImages.forEach((smallimg) => {
//     smallimg.addEventListener('click', () => {
//       mainImage.src = smallimg.src
//     })
// })


// Messaging

document.querySelector('.btn-msg').addEventListener('click',
 () => {
   document.querySelector('.message-box').classList.toggle('message-box-display')
 }

)
document.querySelector('.close-msg').addEventListener('click',
 () => {
   document.querySelector('.message-box').classList.toggle('message-box-display')
 }

)

