'use strict'

function renderGallery() {
    var imgs = setImgs()

    var strHTML = ''

    imgs.forEach(({ url, id }) => {
      strHTML += `<img src="./${url}" data-id=${id} alt="">`
    })

    document.querySelector('.meme-gallery').innerHTML = strHTML
}


function onImgSelect(imgId) {
    setMemeImgId(imgId)
    renderMeme()
}