// upload image
const loadFile = function(event) {
	const urlImage = URL.createObjectURL(event.target.files[0]);
	$('#output').attr('href',urlImage.toString());	
};