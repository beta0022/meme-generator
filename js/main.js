'use strict'

var gElCanvas
var gCtx

function init() {
    gElCanvas = document.getElementById('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
    renderGallery()
}

