// check the import
const filename = "main.js";
console.log(`${filename} is imported`);

// define containe
const svgContainer = d3.select("#card")
    .append("svg")
    .attr("width",340)
    .attr("height",512);

// add pattern 
const card = svgContainer.append('svg:image')
    .attr('href','./img/none.png')
    .attr('width', 340)
    .attr('height', 512);
