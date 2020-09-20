// event click on button
$("#generateCard").click(function () {
  const manaText = $("input#mana").val();
  const healthText = $("input#health").val();
  const attackText = $("input#attack").val();

  // mana
  $("text#mana-text").attr(
    "x",
    manaText.length < 2 ? mana.x.first : mana.x.second
  );
  $("text#mana-text").text(manaText);

  // attack
  $("text#attack-text").attr(
    "x",
    attackText.length < 2 ? attack.x.first : attack.x.second
  );
  $("text#attack-text").text(attackText);

  // health
  $("text#health-text").attr(
    "x",
    healthText.length < 2 ? health.x.first : health.x.second
  );
  $("text#health-text").text(healthText);

  // update description
  for (let i = 0; i < 4; i++) {
    const descriptionText = $(`input#description${i}`).val();
    $(`text#description-text${i}`).text(descriptionText);
  }

  // update color
  const color = $("input#colorPicker").val();
  $("rect#description").attr("fill", color);

  // update opacity
  const opacity = $("input#opacity").val();
  $("rect#description").attr("opacity", opacity);
});
