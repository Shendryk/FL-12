/*
Task #1. Check the email and change the password
Write the code which verify user rights.

Step 1. Check login
	Ask user for an email // use prompt()
	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
	If the input length less than 5 symbols - show “I don't know any emails having name length less than 5 symbols”. 
	If the visitor enters "user@gmail.com" or "admin@gmail.com" then prompt for a password.
	If it’s another string – then show “I don’t know you”.


Step 2. Check password:
	For an empty string or cancelled input, show “Canceled.”
	For email "user@gmail.com" correct password is “UserPass”, for "admin@gmail.com" correct password is  “AdminPass”. In other case, show “Wrong password”.


Step 3. Change the password:
	1) Suggest user/admin to change his password – “Do you want to change your password?”. //use confirm()
	In case the user clicks the 'Cancel' button, the message “You have failed the change.” //use alert()
	2) If user clicked ‘Ok’ – ask to write the old password (use prompt() ) and validate it as at Step 2. 
	3) If the visitor enters correct old password for current email then prompt for a new password.
	If the input is an empty line or ‘Cancel’ button is clicked  – show “Canceled” //use alert()
	If the input length less than 6 – show  “It’s too short password. Sorry.”
	4) If the new password is valid ask to enter it again.//use prompt()
	If the inputted value  doesn’t match the new password from 3) – show “You wrote the wrong password.”
	If user write the same new – show “You have successfully changed your password.” //use alert()
*/

let email = prompt('Input email')
if (email == "0") {
	console.log(0);
}