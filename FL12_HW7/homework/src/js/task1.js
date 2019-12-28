const minEmailLength = 5;
const minPasswordLength = 6;

const email = prompt('Please enter your email');
if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    const password = prompt('Please enter your password');

    if (password === '' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass'
        || email === 'admin@gmail.com' && password === 'AdminPass') {
        const changePassword = confirm('Do you want to change your password?');

        if (changePassword === true) {
            const oldPassword = prompt('Enter your old password');

            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled');
            } else if (email === 'user@gmail.com' && oldPassword === 'UserPass'
                || email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                const newPassword = prompt('Please enter your new password');

                if (newPassword.length < minPasswordLength) {
                    alert('It’s too short password. Sorry.')
                } else {
                    const reEnterPassword = prompt('Please re-enter your password')

                    if (reEnterPassword !== newPassword) {
                        alert('You wrote the wrong password.')
                    } else {
                        alert('You have successfully changed your password')
                    }
                }
            } else {
                alert('Wrong old password ')
            }
        } else if (changePassword === false) {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}