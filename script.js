
$(function () {
  $('#btn').click(function () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3002/liste',
      success: function (data) {

        for (var i = 0; i < data.length; i++) {
          $('#liste').append('<li class="li">Personnage : ' + data[i].name.first + '<br/> ' + data[i].name.last + '<br/>  ' + data[i]._id + '<br/>  ' + data[i].index + '</li>');
        }
      },

      error: function (resultat, statut, erreur) {

        alert('ERROR 404');
      }
    });
  });

  //
  $(document).ready(function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3002/liste',
      success: function (data) {
  
        for (var i = 0; i < data.length; i++) {
          $('#liste').append('<li class="liste_personne">Personnage : ' + data[i].name.first + '<br/> ' + data[i].name.last + '<br/>  ' + data[i]._id + '<br/>  ' + data[i].index + '</li>');
        }
      },
  
      error: function (resultat, statut, erreur) {
  
        alert('ERROR 404');
      }
    });
});
  
  //
});

$(function(){
  $('#btn-2').click(function () {
    $('.li').hide();
  });
});
