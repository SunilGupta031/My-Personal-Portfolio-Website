var url="https://script.google.com/macros/s/AKfycbzFc6m51yYWBTOF0neGdHILmhJL7vvGtOl1rmPPDpoJ4U8hX3UO9-Q8O45UrBGxvLvb3Q/exec"

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        $('#hsr-submit-button').attr('disabled', 'disabled');
        var formData = {
            Name:$('#full_name').val(),
            Email:$('#email').val(),
            Subject:$('#subject').val(),
            Message:$('#message').val(),
        }
            $.ajax({
                type:"Post",
                url:url,
                data: formData,
                dataType: "json",
                encode: 'true',
            }).done(function(data){
                console.log(data);
            });
    });
});