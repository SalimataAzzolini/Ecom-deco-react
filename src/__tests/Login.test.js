import { validateFormLogin } from "../pages/auth/Login";

describe('validateFormLogin', () => {
  it('Retourne true quand le formulaire est valide', () => {
    const credentials = {
      email: 'test@example.com',
      password: 'password123',
    };

    const isValid = validateFormLogin(credentials);

    expect(isValid).toBe(true);
  });

  it('Retourne false quand le formulaire est invalide', () => {
    const credentials = {
      email: '',
      password: '',
    };

    const isValid = validateFormLogin(credentials);

    expect(isValid).toBe(false);
  });

  it('Définit les erreurs appropriées quand le formulaire est invalide', () => {
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


