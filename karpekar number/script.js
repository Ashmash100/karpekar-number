let container = document.createElement("div");
container.classList.add("container");

let textinput = document.createElement("input");
textinput.setAttribute("type","text");
textinput.setAttribute("placeholder","Enter number");
textinput.setAttribute("id","enterno");

let submit = document.createElement("input");
submit.setAttribute("id","submit-button");
submit.setAttribute("type","submit");
submit.setAttribute("value","Check")
submit.innerText = "Check";
submit.setAttribute("class","btn-primary");

let textdiv = document.createElement("div");
textdiv.setAttribute("id","textdiv");


document.body.appendChild(container);
container.append(textinput,submit,textdiv);



document.getElementById('submit-button').addEventListener("click", function() {
  let a = document.getElementById("enterno").value;
  let b = a.toString().split('');
  
  
  let number = b.map(Number);
  let min = number.sort(function(a,b){return a-b});
  let max = min.slice().reverse();
  let maxval = +max.join('');
  let minval = +min.join('');
 
  function iteration(val1,val2) {
            
      if( (val1-val2) == '6174' ) {
        // console.log(val1 + ' - ' + val2 + ' = ' + (val1-val2) );
        let h3 = document.createElement("h6");
        h3.innerText = val1 + ' - ' + val2 + ' = ' + (val1-val2);
        textdiv.appendChild(h3);
        
        
        return;
      } else {
        let difference = val1 - val2;
        let stringify = difference.toString().split('');
        let num = stringify.map(Number);
        let low = num.sort(function(a,b){return a-b});
        let high = low.slice().reverse(); 
        let highval = +high.join('');
        let lowval = +low.join('')
              
        console.log(val1 + ' - ' + val2 + ' = ' + (val1-val2) );
        let h33 = document.createElement("h6");
        h33.innerText = val1 + ' - ' + val2 + ' = ' + (val1-val2);
        textdiv.appendChild(h33);

        iteration(highval,lowval);
      }
      

  }
    
  iteration(maxval,minval);

  document.getElementById("enterno").addEventListener('click',function() {
    textdiv.innerHTML = ""
  });
  
});