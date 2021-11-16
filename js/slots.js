//variables
let bet = 1;
let money = 50;

//array of images
const images = ['cherry.png', 'grapes.png', 'heart.png', 'lemon.png', 'orange.png','seven.png','strawberry.png'];

$('#spin-button').click(spin);
function spin(){
    if(money > 0 && bet <= money && bet > 0)
    {
        $('img').each(function (index, element) {
        $(element).attr("src", "img/"+ images[generateRandom()]);
        });
            if($('#slot-1').attr('src') == $('#slot-2').attr('src') && $('#slot-2').attr('src') == $('#slot-3').attr('src') && $('#slot-3').attr('src') == $('#slot-1').attr('src'))
            {
                money += 15 * bet;
                $('#money').text(money);
                changeMessage('Congratulations! You won!');
            }
            else
            {
                money = money - bet;
                $('#money').text(money);
                changeMessage('You lost, spin again.');
            }
        }
        else if(money == 0)
        {
            changeMessage('You lost all your money!');
        }
        else if(bet > money)
        {
            changeMessage('Invalid bet amount, you do not have enough money to bet $' +bet);
        }
    }

    //random generator
    function generateRandom() {
        return Math.floor(Math.random() * images.length)
    }

    //changes original message
     function changeMessage(message,color) {
         $("#message").css("color", color ? color : "red").text(message).fadeTo(100, 0.1).fadeTo(200, 1);
    }

   //functions for plus and minus
    $('#plus-button').click(function () {
            $('#bet').text(++bet);
        }
    );

    $('#minus-button').click(decrement);
    function decrement() {
            if (bet > 1) {
                $('#bet').text(--bet);
            }
    }