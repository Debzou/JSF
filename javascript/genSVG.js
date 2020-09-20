// define container
const svgContainer = d3
  .select("#cardsG")
  .append("svg")
  .attr("width", 324)
  .attr("height", 474);

(async function () {
  const defs = svgContainer.append("defs");

  // TODO blur img
  // defs
  //   .append("filter")
  //   .attr("id", "blur")
  //   .append("feGaussianBlur")
  //   .attr("stdDeviation", 5);

  // const mask = defs.append("mask").attr("id", "blurMask");

  // mask
  //   .append("rect")
  //   .attr("x", rect.x)
  //   .attr("y", rect.y)
  //   .attr("width", rect.width)
  //   .attr("height", rect.height)
  //   .attr("filter", "url(#blurMask)");

  const gradient = defs
    .append("linearGradient")
    .attr("id", "descriptionGradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "100%")
    .attr("y2", "0%");

  gradient
    .append("stop")
    .attr("class", "start")
    .attr("offset", "0%")
    .attr("stop-color", "#151F34")
    .attr("stop-opacity", 0.9);

  gradient
    .append("stop")
    .attr("class", "middle")
    .attr("offset", "70%")
    .attr("stop-color", "#151F34")
    .attr("stop-opacity", 0.4);

  gradient
    .append("stop")
    .attr("class", "end")
    .attr("offset", "100%")
    .attr("stop-color", "#151F34")
    .attr("stop-opacity", 0);

  // add image center
  const centerImage = svgContainer
    .append("svg:image")
    .attr("id", "output")
    .attr("width", 324)
    .attr("height", 475)
    .call(d3.zoom().scaleExtent([1, 8]).on("zoom", zoom));
 // centerImage.attr("mask", "url(#blurMask)");

  function zoom() {
    centerImage.attr("transform", d3.event.transform);
  }

  // add pattern
  svgContainer
    .append("svg:rect")
    .attr("id", "description")
    .attr("x", rect.x)
    .attr("y", rect.y)
    .attr("width", rect.width)
    .attr("height", rect.height)
    .attr("fill", "url(#descriptionGradient)")
    .attr("pointer-events", "none");

  const base64data = await getImageBase64("./img/base.png");
  svgContainer
    .append("svg:image")
    .attr("id", "base-image")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 324)
    .attr("height", 475)
    .attr("xlink:href", base64data)
    .attr("pointer-events", "none");

  svgContainer
    .append("svg:text")
    .attr("x", mana.x.second)
    .attr("y", mana.y)
    .attr("id", "mana-text")
    .text("10")
    .attr("font-size", "40px")
    .attr("fill", d3.color(white));

  svgContainer
    .append("svg:text")
    .attr("x", attack.x.first)
    .attr("y", attack.y)
    .attr("id", "attack-text")
    .text("1")
    .attr("font-size", "30px")
    .attr("fill", d3.color(white));

  svgContainer
    .append("svg:text")
    .attr("x", health.x.first)
    .attr("y", health.y)
    .attr("id", "health-text")
    .text("1")
    .attr("font-size", "30px")
    .attr("fill", d3.color(white));

  for (let i = 0; i < 4; i++) {
    svgContainer
      .append("svg:text")
      .attr("x", "50%")
      .attr("y", description.y + i * 30)
      .attr("id", `description-text${i}`)
      .text(i === 0 ? "Your liability" : "")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("fill", d3.color(white));
  }
})();
async function getImageBase64(imgPath) {
  return new Promise((resolve, reject) => {
    try {
      fetch(imgPath)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            const base64data = reader.result;
            resolve(base64data);
          };
        });
    } catch (err) {
      reject(err);
    }
  });
}
