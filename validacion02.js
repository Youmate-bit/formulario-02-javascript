// JavaScript Document

function validacion()
	{
		if(document.form1.nombre.value=="")
		{ alert('No ingreso el Nombre'); document.form1.nombre.focus(); return;}
		if(document.form1.apellido.value=="")
		{ alert('No ingreso el Apellido'); document.form1.apellido.focus(); return;}		
		if(document.form1.cedula.value=="")
		{ alert('No ingreso la Cedula'); document.form1.cedula.focus(); return;}		
		if(document.form1.direccion.value=="")
		{ alert('No ingreso la Direccion'); document.form1.direccion.focus(); return;}		
		if(document.form1.sexo[0] && !document.form1.sexo[1].checked)
		{ alert('No ingreso sexo'); document.form1.sexo.focus(); return;}		
		if(!document.form1.musica.checked && !document.form1.deportes.checked && !document.form1.lectura.checked)
		{ alert('Ingrese Hobby'); document.form1.musica.focus(); return;}		
		if(document.form1.correo.value=="")
		{ alert('No ingreso el Correo'); document.form1.correo.focus(); return;}		
		if(document.form1.telefono.value=="")
		{ alert('No ingreso el Numero Telefónico'); document.form1.telefono.focus(); return;}		
		//else if(!valEmail(document.form1.correo.value)) 
		//{alert("Por favor ingrese formato correcto de Correo"); document.form1.correo.focus(); return; }
		document.form1.submit();
	}