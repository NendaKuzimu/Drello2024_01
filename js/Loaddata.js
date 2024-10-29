  function loadData0() {
      // Leemos los datos almacenados, si existen //
        let usrs = JSON.parse(localStorage.getItem("storedUsers") || "[]");
        console.log(usrs, usrs.length);
        let prjs = JSON.parse(localStorage.getItem("storedPrjs") || "[]");
        console.log(prjs, prjs.length);
        let brds = JSON.parse(localStorage.getItem("storedBrds") || "[]");
        console.log(brds, brds.length);
        let tsks = JSON.parse(localStorage.getItem("storedTsks") || "[]");
        console.log(tsks, tsks.length);
        let evts = JSON.parse(localStorage.getItem("eventsDb") || "[]");
        console.log(evts, evts.length);
        // Actualizamos los indicadores de Splash  //
        let totalProyectos = prjs.length;
        let boxPrj = document.getElementById("actPrj");
        boxPrj.innerHTML = totalProyectos;
        let totalBoards = brds.length;
        let boxBrd = document.getElementById("actBrd");
        boxBrd.innerHTML = totalBoards;
        let totalTareas = tsks.length;
        let boxTsk = document.getElementById("actTsk");
        boxTsk.innerHTML = totalTareas;
        let totalEventos = evts.length;
        let boxEvt = document.getElementById("actEvt");
        boxEvt.innerHTML = totalEventos;
        return true;
      };



      /*
      // ==== Recuperacion ====
      function loadUsr() {
      };

      function loadUsrPrj() {
      };

      function loadPrjBrd() {
      };

      function loadBrdTsk() {
      };

      function loadUsr() {
      };

      function loadUsrPrj() {
      };

      function loadPrjBrd() {
      };

      function loadBrdTsk() {
      };

      */

      console.log("Cantidad de claves en LocalStorage", localStorage.length);
      // console.log(myAppArr.length);

      console.log("app_init.js", Date.now());

        window.onload = function exampleFunction() {
          console.log('The Script initializator will load now.');
              document.addEventListener('DOMContentLoaded', () => {
        initData();
          //appDb =[];
          const ref = localStorage.getItem('appDb');

           var appDb = localStorage.getItem('appDb') ? JSON.parse(localStorage.getItem('appDb')) : appDb ={"appDbID":new Date(), "appDbName":"Default", "appDbData":[], "appDbDate":Date()};
           localStorage.setItem("appDb",JSON.stringify(appDb));
           appDb = localStorage.getItem('appDb');
           console.log(appDb);
           alert("itemsArray");
          });
        }

       /* usrIsLogued = sessionStorage.getItem('loggedUsr');
        // alert(usrIsLogued);
       if ( usrIsLogued !='true'){
          window.location.href='#top'; // Si no esta logueado, primero eso
          alert("No hay un Usuario Activo");
          lgnUsr();
        }else{
           alert("Usuario Activo");
       }
       */




         function dataMngr() {
           // una vez que tenemos el usuario identificado o creado,
           // podemos administrar la lectura y presentacion de datos
        console.log("DATA");
              var splash = document.getElementById("splash");
               splash.style.display = 'block';
            loadData0();
             alert("datos leidos, mostrando Splash...");
          }

