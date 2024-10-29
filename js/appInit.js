   function listaTareas()  {
	   msgTar =  "Lista de Tareas de inicializacion de la app \nHay usuario activo? si no hay, loguin \nUsuario Activo - Presentar los datos \nUsuario nuevo Crear las bases de datos de Usuario \n Lectura bases de datos usuario \ncreacion de bases - Usuario\ncreacion de bases - ProyectosUsuario\ncreacion de bases - EventosUsuario\ncreacion de bases - AlarmasUsuario\nConfiguracion Usuario\n Otras configuraciones\nAdministracion estado App"
	 alert("msgTar " + msgTar);

	 console.log("Procesando inicio de App");
	 //listaTareas();
   }

   function lgnUsr() {
	 //alert("Tareas de Login / Registro ");
	 //document.getElementById("hrf01").click()
	 //  window.location.href='#top';
	 //  location.href='#first';
	 showhide('usrlogin');
	 showhide('dashboard');
	  }


function appInit0() {
	 usrIsLogued = sessionStorage.getItem('loggedUsr');
	// alert(usrIsLogued);
   if ( usrIsLogued !='true'){
	 // window.location.href='#top'; // Si no esta logueado, primero eso
	  alert("No hay un Usuario Activo; Procesando Login");
	  showhide('usrlogin');
	  /*anteriormente lgnUsr(); */
	}else{
	   usrNm=sessionStorage.getItem('usrNm')
	   alert("Usuario Activo" + usrNm);
       }
     };



/* ACA DEBERIA COMENZAR TODO!! */
	function appInit()  {
	  // alert( "Procesando appInit, rutinas de inicializacion de la app");
	  console.log("Procesando inicio de App");
	  listaTareas();
	  appInit0();
           }