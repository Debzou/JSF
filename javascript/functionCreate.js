$("#createCard").click(function () {
  svg_to_png("cardsG");
});
function svg_to_png(container) {
  var wrapper = document.getElementById(container);
  var svg = wrapper.querySelector("svg");

  if (typeof window.XMLSerializer != "undefined") {
    var svgData = new XMLSerializer().serializeToString(svg);
  } else if (typeof svg.xml != "undefined") {
    var svgData = svg.xml;
  }

  var canvas = document.createElement("canvas");
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  var context = canvas.getContext("2d");

  make_base(context, canvas);

  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)))
  );

  img.onload = function () {
    context.drawImage(img, 0, 0);
    var imgsrc = canvas.toDataURL("image/png");

    var a = document.createElement("a");
    a.download = container + ".png";
    a.href = imgsrc;
    a.click();
  };
}
function make_base(context, canvas) {
  base_image = new Image();
  base_image.src = "img/base.png";
  context.drawImage(base_image, canvas.width, canvas.height);
}
