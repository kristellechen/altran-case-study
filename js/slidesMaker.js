const pptxgenjs = require("pptxgenjs");

module.exports.defineMasterSlideTemplate = (pptx) => {
  pptx.defineSlideMaster( {
    title: 'HIT_TITLE_SLIDE',
    objects: [
      { 'text': { text: 'PROVEN IN HEALTH INFORMATION TECHNOLOGY',
                  options: { x:0.0, y:0.22, w:13.3, h:0.45, fontFace: 'Arial', bold: 'true', 
                             color:'000000', fontSize: 30, valign: 'm', align: 'center', margin: 0,
                             isTextBox: 'true' }}},
      { 'image': { x:6.0, y:1.2, w:0.31, h:0.07, path: './images/dots.png'}},
      { 'rect': { x:0.57, y:1.4, w:11.0, h:0.45, fill:'007CAD'} },
      { 'text': { text: 'The Situation',
                  options: {x:0.57, y:1.42, w:2.0, h:0.42, aligh: 'left', fontFace:'Arial', 
                            valigh:'m', fontSize:18, bold:'true', color:'FFFFFF'}}},
      { 'rect': { x:0.57, y:1.85, w:11.0, h:1.35, fill:'F2F2F2'}},
      { 'image': { x:10.0, y:1.25, w:2.2, h:2.2, path: './images/hit.png'}, rounding: 'true'},
      { 'image': { x:12.0, y:7.20, w:1.10, h:0.23, path: './images/altran.png'}}
    ]
  })
  pptx.defineSlideMaster( {
    title: 'MedTech_TITLE_SLIDE',
    objects: [
      { 'text': { text: 'PROVEN IN MEDICAL DEVICE TECHNOLOGY',
                  options: { x:0.0, y:0.22, w:13.3, h:0.45, fontFace: 'Arial', bold: 'true', 
                             color:'000000', fontSize: 30, valign: 'm', align: 'center', margin: 0,
                             isTextBox: 'true' }}},
      { 'image': { x:6.0, y:1.2, w:0.31, h:0.07, path: './images/dots.png'}},
      { 'rect': { x:0.57, y:1.4, w:11.0, h:0.45, fill:'007CAD'} },
      { 'text': { text: 'The Situation',
                  options: {x:0.57, y:1.42, w:2.0, h:0.42, aligh: 'left', fontFace:'Arial', 
                            valigh:'m', fontSize:18, bold:'true', color:'FFFFFF'}}},
      { 'rect': { x:0.57, y:1.85, w:11.0, h:1.35, fill:'F2F2F2'}},
      { 'image': { x:10.0, y:1.25, w:2.2, h:2.2, path: './images/medTech.png'}, rounding: 'true'},
      { 'image': { x:12.0, y:7.20, w:1.10, h:0.23, path: './images/altran.png'}}
    ]
  })
}

module.exports.createSlide = (pptx, title, callback) => {
  var slide = pptx.addNewSlide(title)
  pptx.save('sample', callback)
}