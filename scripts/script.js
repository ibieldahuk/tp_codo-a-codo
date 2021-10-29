
////// TRANSICIÓN //////

function colorStuff(){
    let card1 = document.getElementsByClassName('option_1').item(0);
    let card2 = document.getElementsByClassName('option_2').item(0);
    let card3 = document.getElementsByClassName('option_3').item(0);
    let card4 = document.getElementsByClassName('option_4').item(0);

    card1.style.backgroundColor = '#00ff00';
    card2.style.backgroundColor = '#ff0000';
    card3.style.backgroundColor = '#ff0000';
    card4.style.backgroundColor = '#ff0000';
}

////// VERIFICACIÓN DEL FORMULARIO DE CONTACTO //////

function onClickSubmit(){

	verifMail();
	checkCheck();

}

function verifMail(){

	if (document.getElementById('email').value == ''){
		document.getElementById('verifMail').style.color = '#ff0000';
		document.getElementById('verifMail').innerHTML = '[Este campo es obligatorio]'
	}

}

function checkCheck(){

	if (!document.getElementById('checkAge').checked){
		document.getElementById('verifCheck').style.color = '#ff0000';
		document.getElementById('verifCheck').innerHTML = '[Debés ser mayor de 16]';
	}

}
