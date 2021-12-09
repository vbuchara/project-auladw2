const embed = require('embed-video');
let urlEmbed = require('url-embed');

const videos = {
  'apresentação': embed("https://youtu.be/B16z2gs6Fn8", 
    { attr: {
      class: "video-apr"
    }}),
  'mostra_2020': embed("https://youtu.be/SBe5tBAVY_Y", 
    { attr: {
      class: "video-mostra"
    }}),
  'palestras': embed("https://www.youtube.com/watch?v=GrmVEbrWBic&list=PLPmBgyx5tw_0l4OGgO1UKJl00HVLxVtqj&index=4", 
    { attr: {
      class: "video-palestras"
    }})
}

module.exports = videos;