function makeid(l) {
  // write your code here
	var ran="";
	var char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	 for(var i=0; i<l; i++){
		 ren+= char_list.charAt(
			 Math.floor(
				 Math.random()*char_list.length
			 )
		 )
	 }
	return ran;
}       

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
