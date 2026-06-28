document.addEventListener('DOMContentLoaded', function() {

  var btnRegistrar = document.getElementById('btnRegistrar');
  var nombreInput = document.getElementById('nombreEstudiante');
  var descripcionInput = document.getElementById('descripcionEstudiante');
  var categoriaSelect = document.getElementById('categoriaEstudiante');
  var listaEstudiantes = document.getElementById('listaEstudiantes');
  var contadorRegistros = document.getElementById('contadorRegistros');
  var mensajeValidacion = document.getElementById('mensajeValidacion');

  var contador = 0;

  btnRegistrar.addEventListener('click', function(evento) {

    evento.preventDefault();

    var nombre = nombreInput.value.trim();
    var descripcion = descripcionInput.value.trim();
    var categoria = categoriaSelect.value;

    if (nombre === '' || descripcion === '' || categoria === '') {
      mensajeValidacion.innerHTML =
        '<div class="alert alert-danger mt-2">Por favor completa todos los campos.</div>';
      return;
    }

    mensajeValidacion.innerHTML =
      '<div class="alert alert-success mt-2">Estudiante registrado correctamente.</div>';

    contador++;
    contadorRegistros.textContent = contador;

    var nuevoRegistro = document.createElement('div');
    nuevoRegistro.className = 'card p-3 mb-2';
    nuevoRegistro.style.borderTop = '4px solid #c9a84c';

    nuevoRegistro.innerHTML =
      '<strong style="color:#1a5c38;">👤 ' + nombre + '</strong>' +
      '<p class="mb-1">📚 ' + descripcion + '</p>' +
      '<span class="badge" style="background-color:#c9a84c; color:white;">🎓 ' + categoria + '</span>' +
      '<button class="btn btn-sm btn-danger float-end btnEliminar">Eliminar</button>';

    listaEstudiantes.appendChild(nuevoRegistro);

    var btnEliminar = nuevoRegistro.querySelector('.btnEliminar');
    btnEliminar.addEventListener('click', function() {
      listaEstudiantes.removeChild(nuevoRegistro);
      contador--;
      contadorRegistros.textContent = contador;
    });

    nombreInput.value = '';
    descripcionInput.value = '';
    categoriaSelect.value = '';

  });

});