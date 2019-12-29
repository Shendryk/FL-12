let emailInput = prompt('Input email');
let passInput;
let email = ['user@gmail.com', 'admin@gmail.com'];
let pass = ['UserPass', 'AdminPass']

if (emailInput === null) {
	alert('Canceled.')
	
} else if (emailInput.length < 5) {
	alert('I don\'t know any emails having name length less than 5 symbols')
} else if (emailInput === email[0] || emailInput === email[1] ) {
	console.log(true); 
	passInput = prompt('Input password')

	if (passInput === null) {
		alert('Canceled.')
	} else if (emailInput === email[0] && passInput === pass[0] || emailInput === email[1] && passInput === pass[1] ) {
		console.log(true)
		let passValid = passInput;
		let passСhange = confirm('Do you want to change your password?');

		console.log(passСhange);
		if (passСhange) {

			console.log('нажали кнопку подтвердить смену пароля')
			let passOld = prompt('Write the old password');
			if (passValid === passOld) {
				console.log('прошли проверку старого пароля')
				let passNew = prompt('Input new password')
				console.log('вводим новый пароль')
				if (passNew === null) {
					console.log('если не ввели новый пароль или нажали ескейп')

					alert('Canceled.');
				} else if (passNew.length < 6) {
					console.log('проверка на длинну нового пароля')
					alert('It\'s too short password. Sorry.')
				} else {
					
					let passConfirmation = prompt('Confirm new password');
					console.log('вводи подтверждения пароля')
					if ( passNew === passConfirmation) {
						console.log('если пароли совпали')
						alert('You have successfully changed your password.')
					} else {
						console.log('пароль не правильный')
						alert('You wrote the wrong password.')
					}
				}
				// console.log('пароль валидный')
			} else {
				alert('You have refused to enter the current password');
			}

		} else {
			alert('You have failed the change.');
		}

	} else {
		alert('Wrong password');
		console.log(false)
	}

} else {
	console.log(false); 
	alert('I don’t know you')
}