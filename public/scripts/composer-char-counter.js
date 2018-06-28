$(document).ready(function() {
    $("#tweet-textarea").on('keyup', function(){
    

     const $counter = $('.counter');
     const tweetContent = $(this).val();
     const chartweetCount = Array.from(tweetContent).length;
     const remainingChar = 140 - chartweetCount;
     $counter.html(remainingChar);
    if(remainingChar < 0) {
        $('#counter').css('color','red');
    } else {
        $('#counter').css('color','black');
    }
    })
});

