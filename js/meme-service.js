'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedImgUrl: 'img/memes/2.jpg',
    selectedLineIdx: 0,

    lines: [
        {
            txt: 'Enter text here',
            size: 40,
            font: 'Impact',
            color: '#ffffff',
            align: 'center',
            posX: 250,
            posY: 50,
        }
    ]
}


function getMeme() {
    return gMeme
}


function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}


function setFontSize(num) {
    const lineIdx = gMeme.selectedLineIdx
    const fontSize = gMeme.lines[lineIdx].size

    if (fontSize < 30 || fontSize > 100) return
    gMeme.lines[lineIdx].size += num
}


function addLine() {
    const linesCount = gMeme.lines.length

    if (linesCount >= 2) return

    else if (linesCount === 1) {
        var line = {
            txt: 'Enter new text here',
            size: 40,
            font: 'Impact',
            color: '#ffffff',
            align: 'center',
            posX: 250,
            posY: gElCanvas.height - 50,
        }
    }

    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}


function switchLines() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    
    else gMeme.selectedLineIdx++
}