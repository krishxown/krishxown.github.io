$(document).ready(function() {
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#submit').addClass('disabled');
        } else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#submit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});
