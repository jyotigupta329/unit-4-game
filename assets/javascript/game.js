var computerGenerated;
var crystalValueRuby;
var crystalValueEmrald;
var crystalValueSapphire;
var crystalValueCitrine;
var score = 0;
var win = 0;
var loss = 0;


$(document).ready(function () {
    randomValueGenerator();


    $("#crystal-Ruby").on("click", function () {
        score = score + crystalValueRuby;
        console.log("crystalValueRuby : " + crystalValueRuby)
        console.log("Score " + score);
        $("#player-score").text(score);
        winLoose();
    });

    $("#crystal-Emrald").on("click", function () {
        score = score + crystalValueEmrald;
        console.log("crystalValueEmrald " + crystalValueEmrald)
        console.log("Score " + score);
        $("#player-score").text(score);
        winLoose();
    });

    $("#crystal-Sapphire").on("click", function () {
        score = score + crystalValueSapphire;
        console.log("crystalValueSapphire " + crystalValueSapphire)
        console.log("Score " + score);
        $("#player-score").text(score);
        winLoose();
    });

    $("#crytal-Citrine").on("click", function () {
        score = score + crystalValueCitrine;
        console.log("crystalValueCitrine " + crystalValueCitrine)
        console.log("Score " + score);
        $("#player-score").text(score);
        winLoose();
    });


});

function randomValueGenerator() {
    // Ramdom target value
    computerGenerated = Math.floor(Math.random() * 102) + 19;
    console.log("Computer generated value : " + computerGenerated);
    $("#magicNumber").text(computerGenerated);
    // Random value for crystals.
    crystalValueRuby = Math.floor(Math.random() * 11) + 1;
    crystalValueEmrald = Math.floor(Math.random() * 11) + 1;
    crystalValueSapphire = Math.floor(Math.random() * 11) + 1;
    crystalValueCitrine = Math.floor(Math.random() * 11) + 1;
};

function winLoose() {
    if (computerGenerated === score) {
        win++;
        $("#win").text(win);
        alert("YOU WIN");
        reset();
    } else if (score > computerGenerated) {
        loss++;
        $("#loose").text(loss);
        alert("YOU LOST");
        reset();
    }
};

function reset() {
    score = 0;
    $("#player-score").text(score);
    randomValueGenerator();
};

$(function () {
    $('#enlarge').animate({ height: '880px' }, 1000, 'linear');
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})