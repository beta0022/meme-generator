'use strict'

var gImgs = [
    {
        id: 1,
        url: 'img/memes/1.jpg',
        keywords: ['politics', 'funny'],
    },

    {
        id: 2,
        url: 'img/memes/2.jpg',
        keywords: ['politics', 'funny'],
    },

    {
        id: 3,
        url: 'img/memes/3.jpg',
        keywords: ['politics', 'funny'],
    },

    {
        id: 4,
        url: 'img/memes/4.jpg',
        keywords: ['politics', 'funny'],
    },

    {
        id: 5,
        url: 'img/memes/5.jpg',
        keywords: ['politics', 'funny'],
    },

    {
        id: 6,
        url: 'img/memes/6.jpg',
        keywords: ['politics', 'funny'],
    },
]


function getImgs() {
    return gImgs
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedImgUrl = `img/memes/${imgId}.jpg`
}