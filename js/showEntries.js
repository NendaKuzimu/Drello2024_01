    function showEntries() {
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
          console.log( localStorage.getItem( localStorage.key( i ) ) );
           };
        }


      function listAllItems(){
       for (i=0; i<localStorage.length; i++)
       {
           key = localStorage.key(i);
           alert(localStorage.getItem(key));
            document.listaContenidosStorage.innerText+=JSON.stringify(key);
       }
      }

      function pushAllItems(){
      console.log(" PROCESANDO PushAllItems");
       alert("opcion PushAllItems()");
      let t = [];
      for (let i = 0; i < localStorage.length; i++) {
      t.push(localStorage.key(i));
      }
      alert(JSON.stringify(t));
      }


      function showEntries01() {
       console.log(" PROCESANDO opcion 0");
       alert("opcion 0");
      let entries = Object.entries(localStorage);
      console.log(entries);
      document.listaContenidosStorage.innerText=JSON.stringify(entries);
       }

      function showItemsByKey() {
       console.log(" PROCESANDO opcion 1");
       alert("opcion 1");
        var typeofKey = null;
        for (var key in localStorage) {
            typeofKey = (typeof localStorage[key]);
            console.log(key, typeofKey);
            }
       }

      console.log("opcion 2");
      for (let i = 0; i < localStorage.length; i++){
      console.log(localStorage.getItem(i));
      }

       function listaContenidoLS() {

       console.log("opcion 3");

       Object.keys(localStorage).forEach(function(key){
          console.log(localStorage.getItem(key));
      });

         for (const [key, value] of Object.entries(localStorage)) {
            console.log(key, value);
         }
       }


       function listaContLS() {
      var i;

      console.log("local storage");
      for (i = 0; i < localStorage.length; i++)   {
       console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
      }

      console.log("session storage");
      for (i = 0; i < sessionStorage.length; i++) {
       console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
      }
      }

 