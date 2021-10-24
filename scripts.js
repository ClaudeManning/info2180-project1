/* Add your JavaScript to this file */
window.onload= () =>{
	let bigbtn= document.querySelector("section.newsletter form button.btn");

    let hold = document.querySelector("section.newsletter form input[type=\"email\"]");

    hold.setAttribute("placeholder", "Email address");

	const emchar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    
    let alertdisplay = document.querySelector("section.newsletter div.message");
    
    bigbtn.onclick = (event)=>{
        event.preventDefault();
        if (hold.value.length != 0 && emchar.test(hold.value.toLowerCase())){
            alertdisplay.innerHTML = `Thank you! Your email address ${hold.value} has been added to our mailing list!`;
        }
        else{
            alertdisplay.innerHTML = "Please enter a valid email address."
        }
    }
}