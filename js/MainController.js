	  /* MainController - Fncionalidades auxiliares, controladores genericos de la app */

	  function showhidediv(id) {
		// alert("Cambio de Estado, Div: "+ id);
		//Primero, limpiamos todo, para partir de un  estado conocido....

		let div2hd = document.getElementsByClassName("showhidediv");
		for (i = 0; i < div2hd.length; i++) {
		  div2hd[i].style.setProperty('display', 'none');
		}
		//  luego, ajustamos lo que queremos
		document.getElementById(id).style.setProperty('display', 'block');
		console.log(Date(), "  Cambio de estado div: ", id);
	  };



	function showhidesect(id) {
	  // alert("Cambio de Estado, seccion: "+ id);
	  //Primero, limpiamos todo, para partir de un  estado conocido....

	  let sect2hd = document.getElementsByClassName("showhidesectn");
	  for (i = 0; i < sect2hd.length; i++) {
		sect2hd[i].style.setProperty('display', 'none');
	  }
	  //  luego, ajustamos lo que queremos
	  document.getElementById(id).style.setProperty('display', 'block');
	  console.log(Date(), "  Cambio de estado: ", id);
};


/*
controlador de presentacion de secciones
gestiona todas las tareas asociadas con presentar/oculat una seccion
Incluye Visualizacion de la seccion pero tambien posible ocultamiento/despliegue de otras asociadas (Ejemplo, opciones de menu...
*/

	function sectnMngr(id) {
		};

	function divMngr(id) {
	};


		function ctrlAlrmClck() {
			showhide('alarmclock');
	};

			function ctrleventscalendar() {
				showhide('eventscalendar');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};
		function ctrlAlrmClck() {
			showhide('alarmclock');
	};