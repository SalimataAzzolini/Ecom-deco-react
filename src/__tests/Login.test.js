import { validateFormLogin } from "../pages/auth/Login";

describe('validateFormLogin', () => {
  it('should return true when form is valid', () => {
    const credentials = {
      email: 'test@example.com',
      password: 'password123',
    };

    const isValid = validateFormLogin(credentials);

    expect(isValid).toBe(true);
  });

  it('should return false when form is invalid', () => {
    const credentials = {
      email: '',
      password: '',
    };

    const isValid = validateFormLogin(credentials);

    expect(isValid).toBe(false);
  });

  it('should set errors when form is invalid', () => {
    const credentials = {
      email: '',
      password: '',
    };

    validateFormLogin(credentials);

    // Vérifier que les erreurs sont correctement définies
    expect(credentials.errors).toEqual({
      email: "Veuillez entrer votre adresse e-mail.",
      password: "Veuillez entrer votre mot de passe.",
    });
  });
});


