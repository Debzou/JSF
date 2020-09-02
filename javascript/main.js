const filename = "main.js";
console.log(`${filename} is imported`);

const svgContainer = d3.select("#card")
    .append("svg")
    .attr("width",300)
    .attr("height",300);

const card = svgContainer.append('svg:image')
    .attr('href','./img/none.png')
    .attr('width', "250")
    .attr('height', "250");
