'use strict'

// var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gMeme =  {
    selectedImgId: null,
    selectedLineIdx: 0,

    lines: [
        {
        txt: setLineTxt(),
        size: 20,
        align: 'left',
        color: 'white',
        }
    ]
}


function getMeme() {
    return gMeme
}


function setLineTxt() {
    const text = document.querySelector('[name="set-txt"]').value

    return text
    renderMeme()
}


function setMemeImgId(imgId) {
    gMeme.selectedImgId = imgId
  }