'use strict'

var gImgs = [
    {
        id: 1,
        url: 'img/memes/1.jpg',
    },

    {
        id: 2,
        url: 'img/memes/2.jpg',
    },

    {
        id: 3,
        url: 'img/memes/3.jpg',
    },

    {
        id: 4,
        url: 'img/memes/4.jpg',
    },

    {
        id: 5,
        url: 'img/memes/5.jpg',
    },

    {
        id: 6,
        url: 'img/memes/6.jpg',
    },

    {
        id: 7,
        url: 'img/memes/7.jpg',
    },

    {
        id: 8,
        url: 'img/memes/8.jpg',
    },

    {
        id: 9,
        url: 'img/memes/9.jpg',
    },

    {
        id: 10,
        url: 'img/memes/10.jpg',
    },

    {
        id: 11,
        url: 'img/memes/11.jpg',
    },

    {
        id: 12,
        url: 'img/memes/12.jpg',
    },

    {
        id: 13,
        url: 'img/memes/13.jpg',
    },

    {
        id: 14,
        url: 'img/memes/14.jpg',
    },

    {
        id: 15,
        url: 'img/memes/15.jpg',
    },

    {
        id: 16,
        url: 'img/memes/16.jpg',
    },

    {
        id: 17,
        url: 'img/memes/17.jpg',
    },

    {
        id: 18,
        url: 'img/memes/18.jpg',
    },

    {
        id: 19,
        url: 'img/memes/19.jpg',
    },

    {
        id: 20,
        url: 'img/memes/20.jpg',
    },

    {
        id: 21,
        url: 'img/memes/21.jpg',
    },

    {
        id: 22,
        url: 'img/memes/22.jpg',
    },

    {
        id: 23,
        url: 'img/memes/23.jpg',
    },

    {
        id: 24,
        url: 'img/memes/24.jpg',
    },

    {
        id: 25,
        url: 'img/memes/25.jpg',
    },

    {
        id: 26,
        url: 'img/memes/26.jpg',
    },
]


function getImgs() {
    return gImgs
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedImgUrl = `img/memes/${imgId}.jpg`
}