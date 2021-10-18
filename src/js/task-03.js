const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgListEl = document.querySelector('.gallery');
imgListEl.style.display = 'flex';

const imgList = images.map(( {url, alt} ) => {
  const img = document.createElement('li');
  img.insertAdjacentHTML('afterbegin', `<img heigth="150px" width="150" src=${url} alt=${alt}></img>`)
  return img
})

imgListEl.append(...imgList)

const li = document.querySelectorAll('li')

li.forEach((li) => {
  li.style.marginRight = '15px'
  li.style.listStyle = 'none'
})
