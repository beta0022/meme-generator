'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
    renderMeme()
    onSetListeners()
}


function renderMeme() {
    const img = new Image()
    const meme = getMeme()

    img.src = meme.selectedImgUrl

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

        meme.lines.forEach(line => {
            gCtx.lineWidth = '2'
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = line.color
            gCtx.strokeStyle = line.strokeColor
            gCtx.textAlign = line.align

            gCtx.fillText(line.txt, line.posX, line.posY)
            gCtx.strokeText(line.txt, line.posX, line.posY)
        })
    }
}


function onSetListeners() {
    const elTextInput = document.querySelector('.text-line-input')
    elTextInput.addEventListener('input', onUpdateText)

    const elFillColorInput = document.querySelector('.font-color-input')
    elFillColorInput.addEventListener('input', onUpdateFillColor)

    const elFillStrokeColorInput = document.querySelector('.font-stroke-color-input')
    elFillStrokeColorInput.addEventListener('input', onUpdateStrokeColor)

    const elIncreaseFontBtn = document.querySelector('.increase-font-btn')
    elIncreaseFontBtn.addEventListener('click', onIncreaseFontSize)

    const elDecreaseFontBtn = document.querySelector('.decrease-font-btn')
    elDecreaseFontBtn.addEventListener('click', onDecreaseFontSize)

    const elAddLine = document.querySelector('.add-line-btn')
    elAddLine.addEventListener('click', onAddLine)

    const elDeleteLine = document.querySelector('.delete-line-btn')
    elDeleteLine.addEventListener('click', onDeleteText)

    const elSwitchLines = document.querySelector('.switch-line-btn')
    elSwitchLines.addEventListener('click', onSwitchLines)

    const elUpLine = document.querySelector('.up-line-btn')
    elUpLine.addEventListener('click', onMoveUpLine)

    const elDownLine = document.querySelector('.down-line-btn')
    elDownLine.addEventListener('click', onMoveDownLine)

    const elLeftLine = document.querySelector('.aline-left-btn')
    elLeftLine.addEventListener('click', () => {
        onChangeAlign('left')
    })

    const elCenterLine = document.querySelector('.aline-center-btn')
    elCenterLine.addEventListener('click', () => {
        onChangeAlign('center')
    })

    const elRightLine = document.querySelector('.aline-right-btn')
    elRightLine.addEventListener('click', () => {
        onChangeAlign('right')
    })

    const elFontFamilySelect = document.querySelector('.font-family-select')
    elFontFamilySelect.addEventListener('change', function () {
        onChangeFontFamily(this.value)
    })

    const elGalleryNav = document.querySelector('.nav-gallery')
    elGalleryNav.addEventListener('click', onChangeTab)

    const elLogoNav = document.querySelector('.logo')
    elLogoNav.addEventListener('click', onChangeTab)
}


function onUpdateText(ev) {
    setLineTxt(ev.target.value)
    renderMeme()
}


function onUpdateFillColor(ev) {
    setFillColor(ev.target.value)
    renderMeme()
}


function onUpdateStrokeColor(ev) {
    setStrokeColor(ev.target.value)
    renderMeme()
}
 

function onIncreaseFontSize(click) {
    setFontSize(+1)
    renderMeme()
}


function onDecreaseFontSize(click) {
    setFontSize(-1)
    renderMeme()
}


function onMoveUpLine(click) {
    setMoveLine(-2)
    renderMeme()
}


function onMoveDownLine(click) {
    setMoveLine(2)
    renderMeme()
}


function onAddLine(click) {
    addLine()
    clearTxtInput()
    renderMeme()
}


function onDeleteText(click) {
    deleteLine()
    renderMeme()
}


function onSwitchLines(click) {
    switchLines()
    clearTxtInput()
    renderMeme()
}


function onChangeAlign(align) {
    changeAlign(align)
    renderMeme()
}


function clearTxtInput() {
    const elImputText = document.querySelector('.text-line-input')
    elImputText.value = ''
}


function onChangeFontFamily(font) {
    setFontFamily(font)
    renderMeme()
}


function onChangeTab(clickedTab) {
    clearTxtInput()

    const elGalleryNav = document.querySelector('.nav-gallery')
    const elLogoNav = document.querySelector('.logo')
    
    if (elGalleryNav || elLogoNav){
        const elEditor = document.querySelector('.meme-editor')
        elEditor.classList.add('hide')

        const elGallery = document.querySelector('.meme-gallery')
        elGallery.style.display = 'grid'

        onInit()
    }
}


function onShareOnFB() {
    const imgDataUrl = gElCanvas.toDataURL()

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }

    doShareImg(imgDataUrl, onSuccess)
}