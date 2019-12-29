let emailInput = prompt('Input email');
let passInput;
let email = ['user@gmail.com', 'admin@gmail.com'];
let pass = ['UserPass', 'AdminPass'];
let emailMinLength = 5;
let passMinLength = 6;

if (emailInput === null) {
	alert('Canceled.');

} else if (emailInput.length < emailMinLength) {
	alert('I don\'t know any emails having name length less than 5 symbols');

} else if (emailInput === email[0] || emailInput === email[1] ) {
	passInput = prompt('Input password');

	if (passInput === null) {
		alert('Canceled.');

	} else if (emailInput === email[0] && passInput === pass[0] || emailInput === email[1] && passInput === pass[1] ) {
		let passValid = passInput;
		let passСhange = confirm('Do you want to change your password?');
		
		if (passСhange) {
			let passOld = prompt('Write the old password');
			
			if (passValid === passOld) {
				let passNew = prompt('Input new password')
				
				if (passNew === null) {
					alert('Canceled.');

				} else if (passNew.length < passMinLength) {
					alert('It’s too short password. Sorry.');

				} else {
					let passConfirmation = prompt('Confirm new password');
					if (passNew === passConfirmation) {
						alert('You have successfully changed your password.');

					} else {
						alert('You wrote the wrong password.');
					}
				}

			} else {
				alert('You have refused to enter the current password');
			}

		} else {
			alert('You have failed the change.');
		}

	} else {
		alert('Wrong password');
	}

} else {
	alert('I don’t know you');
}