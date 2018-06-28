let buttons = document.querySelectorAll('button');
let sum = 0;
let output = "";
let workings = "";
let prevSymbol = "";
let operators =
{
	'+': function (x, y) { return x + y },
	'-': function (x, y) { return x - y },
  '/': function (x, y) { return x / y },
  'x': function (x, y) { return x * y }
};

for (let n=0; n<buttons.length;n++)
{
	buttons[n].addEventListener("click", function(){calculations(buttons[n].textContent)})
}
function calculations(butn){
	//let output = document.querySelector('.output');
  //let workings = document.querySelector('.workings');
  if((isNumber(output + butn) && !(prevSymbol === "" && butn ==="-"))||(output==="" && butn === "-"))
  {
    if(prevSymbol === "="){clearAll();}
    output += butn;
    document.querySelector('.output').textContent = output;
  } else if(/[x\+-\/-]/.test(butn) && (isNumber(output)) && (prevSymbol!=="=")){
  	console.log("symbol used with number");
  	if (prevSymbol ===""){sum = Number(output);}
    else {sum = operators[prevSymbol](sum,Number(output));}
    sum = Math.round((sum + 0.00000001) * 100000) / 100000;//rounds to 5dp
    prevSymbol = butn;
    output="";
    console.log("sum is: "+ sum);
    document.querySelector('.workings').textContent = sum;
    document.querySelector('.output').textContent = output;
    //workings.textContent += output.textContent + " " + butn.textContent + " ";
  } else if (butn ==="Clear"){clearAll();
  } else if (butn ==="="){
  	sum = operators[prevSymbol](sum,Number(output));
    sum = Math.round((sum + 0.00000001) * 100000) / 100000;
  	document.querySelector('.workings').textContent = sum;
  	document.querySelector('.output').textContent = sum;
  } else {console.log("not Number" + butn);}
}

function clearAll(){
  sum = 0;
  output = "";
  workings = "";
  prevSymbol = "";
  document.querySelector('.workings').textContent = "";
  document.querySelector('.output').textContent = "";
}
function isNumber(x){return (x==="") ? false: !isNaN(x);}
