// constant is define in genSVG

// check the import
const filename2 = "functionClick.js";
console.log(`${filename2} is imported`);

// event click on button
$("#generateCard").click(function() {
    // gather input form
    let mana = $("input#mana").val();
    let health = $("input#health").val();
    let attack = $("input#attack").val();
    // check length
    // depending on the size, the coordinates will change.
    if (mana.toString().length < 2){
        // postion
        $('text#manatxt').attr('x',mx1);
        $('text#manatxt').attr('y',my1);
        // value
        $('text#manatxt').text(mana);
    }else{
        // postion$
        $('text#manatxt').attr('x',mx2);
        $('text#manatxt').attr('y',my2);
        // value
        $('text#manatxt').text(mana);
    }
    if (attack.toString().length < 2){
        // postion
        $('text#attacktxt').attr('x',ax1);
        $('text#attacktxt').attr('y',ay1);
        // value
        $('text#attacktxt').text(attack);
    }else{
        // postion$
        $('text#attacktxt').attr('x',ax2);
        $('text#attacktxt').attr('y',ay2);
        // value
        $('text#attacktxt').text(attack);
    }
    if (health.toString().length < 2){
        // postion
        $('text#healthtxt').attr('x',hx1);
        $('text#healthtxt').attr('y',hy1);
        // value
        $('text#healthtxt').text(health);
    }else{
        // postion$
        $('text#healthtxt').attr('x',hx2);
        $('text#healthtxt').attr('y',hy2);
        // value
        $('text#healthtxt').text(health);
    }
});
