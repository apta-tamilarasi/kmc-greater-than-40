let v=[5,10,15,20]
document.write("Gien array =[ "+v+" ]<br><br>")

let a=v.map(function(e){
	if(e>10){
		var b=e*2
	} 
	return b

})

document.write(" value =[ "+a+" ]")
console.log(a)