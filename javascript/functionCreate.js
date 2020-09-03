$("#createCard").click(function () {
  const svg = $("#cardsG:first-child").html();
  $.post("./download", JSON.stringify({ svg: svg }));
});
