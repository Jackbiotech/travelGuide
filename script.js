'use strict'

// Get a reference to the img1 and first elements
var img1 = document.getElementById('img1');
var first = document.getElementById('first');

// Attach an event listener to img1 that listens for the mouseover event
img1.addEventListener('mouseover', function () {
    first.style.borderLeft = `2px solid green`;
    first.style.borderRight = `2px solid green`;
});

img1.addEventListener('mouseout', function () {
    first.style.border = '';
});



///// 2nd Image
var img2 = document.getElementById('img2');
var second = document.getElementById('second');

img2.addEventListener('mouseover', function () {
    second.style.borderLeft = `2px solid blue`;
    second.style.borderRight = `2px solid blue`;
});

img2.addEventListener('mouseout', function () {
    second.style.border = '';
});



// 3rd image
var img3 = document.getElementById('img3');
var third = document.getElementById('third');

img3.addEventListener('mouseover', function () {
    third.style.borderRight = `2px solid red`;
    third.style.borderLeft = `2px solid red`;
});

img3.addEventListener('mouseout', function () {
    third.style.border = '';
});



// card
var lastContainer = document.getElementById('lastContainer');
var card = document.getElementById('card');

lastContainer.addEventListener('mouseover', function () {
    card.style.border = '3px solid purple';

});

lastContainer.addEventListener('mouseout', function () {
    card.style.border = '';
});

