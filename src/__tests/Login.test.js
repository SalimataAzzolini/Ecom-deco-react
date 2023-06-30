const {Login} = require('../pages/auth/Login');
const {render} = require('@testing-library/react');

test('Test sur la page de connexion', () => {
    const {getByTestId} = render(<Login/>);//render permet de rendre le composant
    const email = getByTestId('email');
    const password = getByTestId('password');
    const submit = getByTestId('submit');
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
    expect(submit).toBeTruthy();
}
);

