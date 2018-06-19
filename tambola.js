var next;

function Next() {
        var arr = []
	while(arr.length < 1){
        var randomnumber = Math.ceil(Math.random()*90)
    	if(arr.indexOf(randomnumber) > -1) continue;
    	arr[arr.length] = randomnumber;
        document.getElementById(arr).style.backgroundColor = "red";
		document.getElementById("insert").value = randomnumber;
}
}




