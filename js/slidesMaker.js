const pptxgenjs = require('pptxgenjs')
const CaseStudies = require('../models/caseStudy')

module.exports.defineMasterSlideTemplate = (pptx) => {
  pptx.defineSlideMaster({
    title: 'HIT_TITLE_SLIDE',
    objects: [
      { 'text': { text: 'PROVEN IN HEALTH INFORMATION TECHNOLOGY',
          options: { x: 0.0, y: 0.22, w: 13.3, h: 0.45, fontFace: 'Arial', bold: 'true',
            color: '000000', fontSize: 30, valign: 'm', align: 'center', margin: 0,
      isTextBox: 'true' }}},
      { 'image': { x: 6.0, y: 1.4, w: 0.31, h: 0.07, path: './images/dots.png'}},
      { 'rect': { x: 0.57, y: 1.6, w: 11.5, h: 0.45, fill: '007CAD'} },
      { 'text': { text: 'The Situation',
          options: {x: 0.57, y: 1.62, w: 2.0, h: 0.42, align: 'left', fontFace: 'Arial',
      valign: 'm', fontSize: 18, bold: 'true', color: 'FFFFFF'}}},
      { 'rect': { x: 0.57, y: 2.05, w: 11.5, h: 1.45, fill: 'F2F2F2'}},
      { 'image': { x: 10.75, y: 1.45, w: 2.2, h: 2.2, path: './images/hit.png'}, rounding: 'true'},
      { 'image': { x: 0.5, y: 3.75, w: 3.8, h: 0.92, path: './images/challenge.png'}},
      { 'image': { x: 4.70, y: 3.75, w: 3.9, h: 0.92, path: './images/solution.png'}},
      { 'image': { x: 8.9, y: 3.75, w: 3.9, h: 0.92, path: './images/results.png'}},
      { 'image': { x: 4.5, y: 4.67, w: 0.04, h: 2.3, path: './images/vertical.png'}},
      { 'image': { x: 8.75, y: 4.67, w: 0.04, h: 2.3, path: './images/vertical.png'}},
      { 'image': { x: 12.0, y: 7.20, w: 1.10, h: 0.23, path: './images/altran.png'}}
    ]
  })
  pptx.defineSlideMaster({
    title: 'MedTech_TITLE_SLIDE',
    objects: [
      { 'text': { text: 'PROVEN IN MEDICAL DEVICE TECHNOLOGY',
          options: { x: 0.0, y: 0.22, w: 13.3, h: 0.45, fontFace: 'Arial', bold: true,
            color: '000000', fontSize: 30, valign: 'm', align: 'center', margin: 0,
      isTextBox: 'true' }}},
      { 'image': { x: 6.0, y: 1.4, w: 0.31, h: 0.07, path: './images/dots.png'}},
      { 'rect': { x: 0.57, y: 1.6, w: 11.5, h: 0.45, fill: '007CAD'} },
      { 'text': { text: 'The Situation',
          options: {x: 0.57, y: 1.62, w: 2.0, h: 0.42, align: 'left', fontFace: 'Arial',
      valign: 'm', fontSize: 18, bold: 'true', color: 'FFFFFF'}}},
      { 'rect': { x: 0.57, y: 2.05, w: 11.5, h: 1.45, fill: 'F2F2F2'}},
      { 'image': { x: 10.75, y: 1.45, w: 2.2, h: 2.2, path: './images/medTech.png'}, rounding: 'true'},
      { 'image': { x: 0.5, y: 3.75, w: 3.8, h: 0.92, path: './images/challenge.png'}},
      { 'image': { x: 4.70, y: 3.75, w: 3.9, h: 0.92, path: './images/solution.png'}},
      { 'image': { x: 8.9, y: 3.75, w: 3.9, h: 0.92, path: './images/results.png'}},
      { 'image': { x: 4.5, y: 4.67, w: 0.04, h: 2.3, path: './images/vertical.png'}},
      { 'image': { x: 8.75, y: 4.67, w: 0.04, h: 2.3, path: './images/vertical.png'}},
      { 'image': { x: 12.0, y: 7.20, w: 1.10, h: 0.23, path: './images/altran.png'}}
    ]
  })
}

module.exports.createSlide = (pptx, study, title, callback) => {
  var slide = pptx.addNewSlide(title)
  slide.addText(study.situation, {x: 0.58, y: 2.05, w: 9.0, h: 1.40, align: 'left', fontFace: 'Arial',
  fontSize: 15, color: '000000', valign: 'top'})
  slide.addText(study.challenges, {x: 0.6, y: 4.72, w: 3.4, h: 2.1, align: 'left', fontFace: 'Arial',
  fontSize: 12, color: '595959', valign: 'top', bullet: {code: '25AA'}})
  slide.addText(study.solution, {x: 4.8, y: 4.72, w: 3.4, h: 2.1, align: 'left', fontFace: 'Arial',
  fontSize: 12, color: '595959', valign: 'top', bullet: {code: '25AA'}})
  slide.addText(study.provenResults, {x: 9.0, y: 4.72, w: 3.4, h: 2.1, align: 'left', fontFace: 'Arial',
  fontSize: 12, color: '595959', valign: 'top', bullet: {code: '25AA'}})
  pptx.save('http', callback)
// pptx.save('sample.pptx', callback)
}
