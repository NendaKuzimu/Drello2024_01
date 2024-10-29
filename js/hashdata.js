   /*<script>*/
      async function generateHash(value) {
       // var value = prompt("mypassword", "");
      alert("Encriptando  " + value);
      i=+1;
        var crypto = window.crypto;
        var buffer = str2ab(value); // Fix
        var hash_bytes = crypto.subtle.digest("SHA-1", buffer);
       // alert(hash_bytes);
       // hash_bytes.then(value => document.write([...new Uint8Array(value)].map(x => x.toString(16).padStart(2, '0')).join('')));
       // hash_bytes.then(value => console.log([...new Uint8Array(value)].map(x => x.toString(16).padStart(2, '0')).join('')));
       //var tmp = hash_bytes.then(value => ([...new Uint8Array(value)].map(x => x.toString(16).padStart(2, '0')).join('')));
      // alert(tmp);
      // return(tmp);
       return await hash_bytes.then(value => encryptedData.innerText+="\n"+([...new Uint8Array(value)].map(x => x.toString(16).padStart(2, '0')).join('')));
       //hash_bytes.then(value => localStorage.setItem(([...new Uint8Array(value)].map(x => x.toString(16).padStart(2, '0')).join('')));

      }

      // https://stackoverflow.com/a/11058858
      function str2ab(str) {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
      }

   /* <!--/script>
   <script---> */
      function getDat2Hash() {
      i=0;
      let clv_1 = "";
      let clv_2 = "";
      let clv_3 = "";
      let  ID   = [];

      encryptedData.innerText="";

      var usr=prompt("usuario", "");
      var pwd=prompt("password", "");
      var mail=prompt("email", "");

      alert( "claves:  Usr-" + usr + "| Pwd - " + pwd + "| Mail - " + mail);

      clv_1 = usr+pwd;
      clv_2 = usr+mail;
      clv_3 = pwd+mail;

      hsh_clv_1 = generateHash(clv_1);
      alert("Hash Clave 1 " + hsh_clv_1.toString());
      ID.push(hsh_clv_1);
      alert(encryptedData.innetText);

      hsh_clv_2 = generateHash(clv_2)
      alert("Hash Clave 2 " + hsh_clv_2.toString());
      ID.push(hsh_clv_2);
      alert(encryptedData.innetText);

      hsh_clv_3 = generateHash(clv_3)
      alert("Hash Clave 3 " + hsh_clv_3.toString());
      ID.push(hsh_clv_3);
      alert(encryptedData.innetText);

       ID = ["tanga" , JSON.stringify({hsh_clv_1, hsh_clv_2, hsh_clv_3 })]
      alert("ID: " + ID);

      localStorage.setItem("Toronja", JSON.stringify(ID));
      alert(encryptedData.innetText);
      localStorage.setItem("Toronja", encryptedData.innetText);
      //  generateHash() no esta devolviendo nada!!! ;
      }
   /* <!--/script>
   <script---> */

      //This is a basic function to generate a SHA-1 hex string digest for any input string:
      //https://stackoverflow.com/questions/68141513/how-to-create-a-hash-using-web-crypto-api

      async function digest(message, algo = 'SHA-1') {
        return Array.from(
          new Uint8Array(
            await crypto.subtle.digest(algo, new TextEncoder().encode(message))
          ),
          (byte) => byte.toString(16).padStart(2, '0')
        ).join('');
      }
   /* </script> */