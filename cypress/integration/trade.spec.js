import signup from '../pages/SignupPage'
import dash from '../pages/DashboardPage'

describe('Dashboard', () => {


    it('searching Neymar Legend sticker', function () {
        signup.go()
        signup.email()
        signup.truepassword()
        signup.submit()
        const ExpectedMessage = 'Aquela figurinha incrível a um clique de distância.'
        signup.messageShouldBe(ExpectedMessage)

        dash.go()
        dash.submit()
        dash.sticker()
    })
})