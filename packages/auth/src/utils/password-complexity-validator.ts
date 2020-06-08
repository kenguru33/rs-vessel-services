import PasswordValidator from 'password-validator'

const schema = new PasswordValidator()
// Add properties to it
schema
    .is().min(5)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


const passwordComplexityValidator = (password: string) => {
    return schema.validate(password, {list: true}) as Array<string>
}

export { passwordComplexityValidator }