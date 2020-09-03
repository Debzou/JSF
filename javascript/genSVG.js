// check the import
const filename = "genSVG.js";
console.log(`${filename} is imported`);

// coordinate mana
// with one mana's number
const mx1 = 35;
const my1 = 64;
// with two mana's number
const mx2 = 23;
const my2 = 64;

// define container
const svgContainer = d3.select("#cardsG")
    .append("svg")
    .attr("width",340)
    .attr("height",512);

// add pattern 
const card = svgContainer.append('svg:image')
    .attr('href','./img/none.png')
    .attr('width', 340)
    .attr('height', 512);

// add div mana
const mana = svgContainer.append('svg:text')
    .attr('x',mx2)
    .attr('y',my2)
    .attr('id','manatxt')
    .text('10')
    .attr("font-size", "40px")
    .attr("fill", d3.color("white"))
