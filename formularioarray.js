var edad, calificacion
verif = new Boolean(false);
function viewsArrayInput(){
  var alumno = document.getElementsByClassName('alumno')[0].value
  var alumnoarray = new Array()
  var select = document.getElementById('select')
  var valorselect = select.options[select.selectedIndex].value
  calificacion = +document.getElementById('calificacion').value

  if(alumno != null && calificacion != null && calificacion > 0 && calificacion < 11 && edad != null){
    alumnoarray.push(alumno,valorselect,calificacion,edad)
    document.getElementById('new').insertRow(-1).innerHTML = '<tr><td>' + alumnoarray[0] + '</td><td>' + alumnoarray[1] + '</td><td>' + alumnoarray[2] + '</td><td>' +   alumnoarray[3] + '</td></tr>'
    document.getElementById('alumno').value = null
    document.getElementById('select').value = null
    document.getElementById('calificacion').value = null
    document.getElementById('fecha').value = null
    edad = null
    verif = true;
  }
}

$(function(){
  $('#fecha').on('change', calcularEdad);
});

function calcularEdad() {
  fecha = $(this).val();
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
}

$(function(){
  var alumno, calificacion, fecha, cont 
  bool = new Boolean(false);
  $("#agregar").on('click', function(){
    alumno = $.trim($('#alumno').val());
    calificacion = $('#calificacion').val();
    fecha = $('#fecha').val();
    if(cont == 0){
      if(alumno.length == 0 ){
        $('#alumno').addClass('is-invalid');
        $('#alumno_error').html('Debe contener almenos un caracter');
      }else if(alumno.length > 0){
        $('#alumno').removeClass('is-invalid');
        $('#alumno_error').empty();
      }

      if(calificacion.length == 0){
        $('#calificacion').addClass('is-invalid');
        $('#calificacion_error').html('Debe de contener una calificacion')
      } else if(calificacion < 0 || calificacion > 10){
        $('#calificacion').addClass('is-invalid');
        $('#calificacion_error').html('Calificación invalida')
      } else if(calificacion.length > 0){
        $('#calificacion').removeClass('is-invalid');
        $('#calificacion_error').empty();
      }

      if(fecha.length == 0){
        $('#fecha').addClass('is-invalid');
        $('#fecha_error').html('Debe contener la fecha');
      }else if(fecha.length > 0){
        $('#fecha').removeClass('is-invalid');
        $('#fecha_error').empty();
      }
      cont++;
      bool = true
    }
  });


});
