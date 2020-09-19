// define container
const svgContainer = d3
  .select("#cardsG")
  .append("svg")
  .attr("width", 324)
  .attr("height", 474);

// add image center
const centerImage = svgContainer
  .append("svg:image")
  .attr("id", "output")
  .attr("width", 324)
  .attr("height", 475)
  .call(d3.zoom().scaleExtent([1, 8]).on("zoom", zoom));

function zoom() {
  centerImage.attr("transform", d3.event.transform);
}

svgContainer
  .append("svg:rect")
  .attr("id", "description")
  .attr("x", rect.x)
  .attr("y", rect.y)
  .attr("width", 315)
  .attr("height", 182)
  .attr("fill", "#8C9763")
  .attr("opacity", 0.9)
  .attr("pointer-events", "none");

// add pattern
addImage("./img/base.png", 475, 324, 0, 0);

// add div mana
console.log("mana x", mana.x.first)
console.log("mana y", mana.y)
svgContainer
  .append("svg:text")
  .attr("x", mana.x.first)
  .attr("y", mana.y)
  .attr("id", "mana-text")
  .text("10")
  .attr("font-size", "40px")
  .attr("fill", d3.color("white"));

svgContainer
  .append("svg:text")
  .attr("x", attack.x.first)
  .attr("y", attack.y)
  .attr("id", "attack-text")
  .text("1")
  .attr("font-size", "30px")
  .attr("fill", d3.color("white"));

svgContainer
  .append("svg:text")
  .attr("x", health.x.first)
  .attr("y", health.y)
  .attr("id", "health-text")
  .text("1")
  .attr("font-size", "30px")
  .attr("fill", d3.color("white"));

for (let i = 0; i < 4; i++) {
  svgContainer
    .append("svg:text")
    .attr("x", description.x)
    .attr("y", description.y + i * 30)
    .attr("id", `description-text${i}`)
    .text(i === 0 ? "Your liability" : "")
    .attr("font-size", "20px")
    .attr("fill", d3.color("black"));
}

function addImage(imgPath, height, width, x, y) {
  fetch(imgPath)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        const base64data = reader.result;

        svgContainer
          .append("svg:image")
          .attr("x", x)
          .attr("y", y)
          .attr("width", width)
          .attr("height", height)
          .attr("xlink:href", base64data);
      };
    });
}
