var edad, prom_progra = 0, prom_sist = 0,sum_progra = 0, sum_sist = 0, cont = 0, cont2 = 0, alumnoarray = new Array()
var a = 0, b = 0 , c = 0, d = 0
verif = new Boolean(false);

function viewsArrayInput(){
  var alumno = document.getElementsByClassName('alumno')[0].value

  var select = document.getElementById('select')
  var valorselect = select.options[select.selectedIndex].value
  var calificacion = +document.getElementById('calificacion').value

  if(alumno != null && calificacion != null && calificacion > 0 && calificacion < 11 && edad != null){
    alumnoarray.push(alumno,valorselect,calificacion,edad)
    if(valorselect == "Programacion Web"){
      cont ++
      sum_progra += calificacion
      prom_progra = (sum_progra)/cont
    }

    if(valorselect == "Sistemas Embebidos"){
      cont2 ++
      sum_sist += calificacion
      prom_sist = (sum_sist)/cont2
    }

    document.getElementById('promedio_progra').innerHTML = prom_progra
    document.getElementById('promedio_sist').innerHTML = prom_sist
    document.getElementById('new').insertRow(-1).innerHTML = '<tr><td>' + alumnoarray[0 + a] + '</td><td>' + alumnoarray[1 + b] + '</td><td>' + alumnoarray[2 + c] + '</td><td>' +   alumnoarray[3 + d] + '</td></tr>'
    document.getElementById('alumno').value = null
    document.getElementById('select').value = null
    document.getElementById('calificacion').value = null
    document.getElementById('fecha').value = null
    a += 4
    b += 4
    c += 4
    d += 4
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

  var alumno = $.trim($('#alumno').val());
  var select = $('select').val();
  var calificacion = $('#calificacion').val();
  var fecha = $('#fecha').val();

  $('#alumno').keyup(function(){
    alumno = $.trim($('#alumno').val());

    if(alumno.length <= 1 || alumno == null){
      $('#alumno').addClass('is-invalid');
      $('#alumno_validate').removeClass('was-validated');
      $('#alumno_error').html('Debe contener almenos dos caracteres');
    }else if(alumno.length > 1){
      $('#alumno').removeClass('is-invalid');
      $('#alumno_validate').addClass('was-validated');
      $('#alumno_error').empty();
    }

  });

  $('#calificacion').keyup(function(){
    calificacion = $('#calificacion').val();

    if(calificacion.length == 0){
      $('#calificacion').addClass('is-invalid');
      $('#calificacion_validate').removeClass('was-validated');
      $('#calificacion_error').html('Debe de contener una calificacion')
    } else if(calificacion < 0 || calificacion > 10){
      $('#calificacion').addClass('is-invalid');
      $('#calificacion_error').html('Calificación invalida')
    } else if(calificacion.length > 0){
      $('#calificacion').removeClass('is-invalid');
      $('#calificacion_validate').addClass('was-validated');
      $('#calificacion_error').empty();
    }
  });

  $('#fecha').keyup(function(){
    fecha = $('#fecha').val();

    if(!fecha){
      $('#fecha').addClass('is-invalid');
      $('#fecha_validate').removeClass('was-validated');
      $('#fecha_error').html('Debe contener la fecha');
    }else if(fecha.length > 0){
      $('#fecha').removeClass('is-invalid');
      $('#fecha_validate').addClass('was-validated');
      $('#fecha_error').empty();
    }
  });

  $('#alumno, #calificacion, #fecha').keyup(function(){
    if((alumno.length >= 1) && (calificacion.length >= 0) && (fecha.length > 0)){
      $('#agregar').attr("disabled", false);
    }
    if ((alumno.length <= 1) || (alumno == '') || (calificacion == '') || (fecha == '')){
      $('#agregar').attr("disabled", true);
    }
  });

  $('#agregar').on('click', function(){
    alumno = $.trim($('#alumno').val());
    calificacion = $('#calificacion').val();
    fecha = $('#fecha').val();
    alert('Información almacenada correctamente')

    if((alumno == '') && (calificacion == '') && (fecha == '')){
      $('#alumno_validate').removeClass('was-validated');
      $('#calificacion_validate').removeClass('was-validated');
      $('#fecha_validate').removeClass('was-validated');
      $('#agregar').attr("disabled", true);
    }
  });
});
