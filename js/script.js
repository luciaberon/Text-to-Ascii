
var input = document.getElementById("char");

function AgregarTexto() {
    console.log("EXECUTED");
    var text = input.value;
    let arr = text.split("");  
    document.getElementById('output').innerHTML = "";

    for (let i = 0; i<arr.length; i++) {
        let ch = arr[i];
        console.log("Character:",ch);
        let index = 0; 
        let p = ch.charCodeAt(index);
        console.log(p);
        document.getElementById('output').innerHTML += " " + p;
    }     

}

function Copy() {
     // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = document.getElementById('output').innerHTML;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);

}

