$(document).ready(function() { console.log('ready')

$("#tweet-textarea").on('input propertychange paste', function(){

     const $counter = $('.counter');
     const tweetContent = $(this).val() ;
     const chartweetCount = Array.from(tweetContent).length ;
     const remainingChar = 140 - chartweetCount ;
     console.log(remainingChar);
     $counter.html(remainingChar) ;

    if(remainingChar < 0) {
        $('#counter').css('color','red');
    } else {
        $('#counter').css('color','black');
    }
       })


});

