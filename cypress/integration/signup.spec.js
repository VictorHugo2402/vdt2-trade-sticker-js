import signup from '../pages/SignupPage'

describe('Signup', () => {


    it('User should signup', function () {
        signup.go()
        signup.email()
        signup.truepassword()
        signup.submit()
        const ExpectedMessage = 'Aquela figurinha incrível a um clique de distância.'
        signup.messageShouldBe(ExpectedMessage)
    })

    it('Invalid password', function () {
        signup.go()
        signup.email()
        signup.falsepassword()
        signup.submit()
        const ExpectedMessage = 'Credenciais inválidas, tente novamente!'
        signup.alertMessageShouldBe(ExpectedMessage)
    })

    it('unfilled password', function () {
        signup.go()
        signup.email()
        signup.submit()
        const ExpectedMessage = 'Por favor, informe a sua senha secreta!'
        signup.alertMessageShouldBe(ExpectedMessage)
    })
    it('unfilled email', function () {
        signup.go()
        signup.truepassword()
        signup.submit()
        const ExpectedMessage = 'Por favor, informe o seu email!'
        signup.alertMessageShouldBe(ExpectedMessage)
    })
    it('unfilled email and password', function () {
        signup.go()
        signup.submit()
        const ExpectedMessage = 'Por favor, informe suas credenciais!'
        signup.alertMessageShouldBe(ExpectedMessage)
    })
})