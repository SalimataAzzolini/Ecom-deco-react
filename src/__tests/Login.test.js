import React from 'react';
import {Login} from '../pages/auth/Login';
import {render} from '@testing-library/react';


test('Test sur la page de connexion', () => {
    const {getByTestId} = render(<Login/>);
}
);



