      function showhide(id) {
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