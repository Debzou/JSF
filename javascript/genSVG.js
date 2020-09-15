// check the import
const filename = "genSVG.js";
console.log(`${filename} is imported`);

// coordinate mana
// with one mana's number
const mx1 = 25;
const my1 = 52;
// with two mana's number
const mx2 = 15;
const my2 = my1;

// coordinate attack
// with one attack's number
const ax1 = 26;
const ay1 = 453;
// with two attack's number
const ax2 = 16;
const ay2 = ay1;

// coordinate health
// with one health's number
const hx1 = 280;
const hy1 = ay1;
// with two health's number
const hx2 = 270;
const hy2 = ay1;

// coordinate rect
const xRect = 10;
const yRect = 290;

// coordinate description
const xd = 35;
const yd = 320;


// define container
const svgContainer = d3.select("#cardsG")
    .append("svg")
    .attr("width",324)
    .attr("height",475);

// add image center 
const centerImage = svgContainer.append('svg:image')
    .attr('id','output')
    .attr('width', 340)
    .attr('height', 512)
    .call(d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", zoom)
    );
    
function zoom() {
    centerImage.attr("transform", d3.event.transform);
}


const description = svgContainer.append("svg:rect")
    .attr('id','description')
    .attr("x", xRect)
    .attr("y",yRect)
    .attr("width",315)
    .attr("height",200)
    .attr("fill","#8C9763");

// add pattern 
const card = svgContainer.append('svg:image')
    .attr('href','./img/none2.png')
    .attr('width', 324)
    .attr('height', 474)
    .attr("pointer-events", "none");

// add div mana
const mana = svgContainer.append('svg:text')
    .attr('x',mx2)
    .attr('y',my2)
    .attr('id','manatxt')
    .text('10')
    .attr("font-size", "40px")
    .attr("fill", d3.color("white"));

const attack = svgContainer.append('svg:text')
    .attr('x',ax1)
    .attr('y',ay1)
    .attr('id','attacktxt')
    .text('1')
    .attr("font-size", "30px")
    .attr("fill", d3.color("white"));

const health = svgContainer.append('svg:text')
    .attr('x',hx1)
    .attr('y',hy1)
    .attr('id','healthtxt')
    .text('1')
    .attr("font-size", "30px")
    .attr("fill", d3.color("white"));

const descript1 = svgContainer.append('svg:text')
    .attr('x',xd)
    .attr('y',yd)
    .attr('id','descriptiontxt1')
    .text('Your liability')
    .attr("font-size", "20px")
    .attr("fill", d3.color("black"));

const descript2 = svgContainer.append('svg:text')
.attr('x',xd)
.attr('y',yd+30)
.attr('id','descriptiontxt2')
.text('')
.attr("font-size", "20px")
.attr("fill", d3.color("black"));

const descript3 = svgContainer.append('svg:text')
    .attr('x',xd)
    .attr('y',yd+60)
    .attr('id','descriptiontxt3')
    .text('')
    .attr("font-size", "20px")
    .attr("fill", d3.color("black"));

const descript4 = svgContainer.append('svg:text')
.attr('x',xd)
.attr('y',yd+90)
.attr('id','descriptiontxt4')
.text('')
.attr("font-size", "20px")
.attr("fill", d3.color("black"));




