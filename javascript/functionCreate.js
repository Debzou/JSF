$("#createCard").click(function () {
  const svg = $("#cardsG:first-child").html();
  console.log("svg", svg);
  $.post("./download", svg);
});
