$(document).ready(function () {
    $("#random").click(function (e) {
        e.preventDefault();
        const rn = Math.ceil(Math.random() * 88);
        getInfo(rn);
    });
    $('#search').click(function (e) { 
        e.preventDefault();
        let val1= $('input').val();
        $('input').val('');
        getInfo(val1);
    });
    function getInfo(num) {
        $.get(`https://akabab.github.io/starwars-api/api/id/${num}.json`,
            function (data) {
                $('#character').attr('src', `${data['image']}`);
                $('#id').html(`:&nbsp;${data.id}`);
                $('#name').html(`:&nbsp;${data.name}`);
                if (data.height!=undefined) {
                    $('#height').html(`:&nbsp;${data.height}&nbsp;m`);
                } else {
                    $('#height').text(`: Unknown`);
                }
                if (data.mass!=undefined) {
                    $('#weight').html(`:&nbsp;${data.mass}&nbsp;kg`);
                } else{
                    $('#weight').text(': Unknown')
                }
                $('#gender').html(`:&nbsp;${data.gender}`);
                $('#species').html(`:&nbsp;${data.species}`);

                if (data.gender=='female') {
                    $('body').css('--bs-border-color', 'red');
                } else {
                    $('body').css('--bs-border-color', 'blue');
                }
            }
        );
    }
});
