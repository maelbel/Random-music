var played = [];
$(function() {
    $('#getmusic').on('click', function() {
        try {
            $.ajax({
                type: "POST",
                url: "controller/ajax.php",
                data : 'played=' + played,
                timeout: 10000, //10 secondes
                beforeSend: function() {
                    // $('.alert').hide();
                    // createLoadingScreen($('#ajax-div'));
                },
                success: function( response ) {
                    var data = response.split(";");
                    $('#exampleModal .modal-body h3').html(data[0]); //Affichage de l'url cible, ici AjaxTemplate02.php, dans une DIV
                    $('#exampleModal .modal-body p').html(data[1]);
                    $('#exampleModal').modal('show');
                    $('#list-played').append('<div class="col-3 py-4 text-white"><strong class="fw-semibold">'+ data[0] +'</strong><a class="d-block small opacity-75">'+ data[1] +'</a></div>');
                    console.log( response );
                    played.push(data[1]);
                },
                error: function( response ) {
                    $('#status').text('Erreur pour poster le formulaire : '+ response.status + " " + response.statusText);
                    //console.log( response );
                },
                complete: function() { // When all the ajax request is done
                    // deleteLoadingScreen($('#ajax-div'));
                }
            });
        } catch(e) {
            alert(e);
        }
    });

    $('#resetmusic').on('click', function() {
        $('#list-played').html('');
    });

    $('#copy').on('click', function(){
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#url').text()).select();
        navigator.clipboard.writeText(temp.val());
        temp.remove();
    });
});