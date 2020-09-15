// constant is define in genSVG

// check the import
const filename3 = "functionUpload.js";
console.log(`${filename3} is imported`);

// upload image
const loadFile = function(event) {
	const urlImage = URL.createObjectURL(event.target.files[0]);
	$('#output').attr('href',urlImage.toString());	
};