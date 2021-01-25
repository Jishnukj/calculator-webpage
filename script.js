function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	if(document.getElementById("output-value").innerText=="-"){
		return "";
	}
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	document.getElementById("output-value").innerText=num;
}

output="";
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printOutput("");
			printHistory("");
		}
		else if(this.id=="backspace"){
			output=getOutput();
			output=output.substr(0,output.length-1);
			if(output=="-"){
				output="";
			}
			printOutput(output);
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output!=""){
				history=history+output;
				printHistory(history);
				if(this.id=="eq"){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
			else if(output=="" && history=="" && this.id=="-"){
				output=output+this.id;
				printHistory("");
				printOutput(output);
			}
		}
	})
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		output=getOutput();
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	})
}