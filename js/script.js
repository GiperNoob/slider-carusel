let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let widthPictures = 134;
let numberOfVisiblePictures = 3;
let position = 0;
let list = document.querySelector('.images');
let listElements = document.querySelectorAll('li');

prev.onclick = () => {
    position += widthPictures * numberOfVisiblePictures;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

next.onclick = () => {
    position -= widthPictures * numberOfVisiblePictures;
    position = Math.max(position, -widthPictures * (listElements.length - numberOfVisiblePictures)); // not over -938px
    list.style.marginLeft = position + 'px';
}