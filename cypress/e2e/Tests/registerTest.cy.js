import { registerPage } from "../../Pages/registerPages"
 const registerobj=new registerPage()
 import registerData from '../../fixtures/registerData.json'
describe('test automation',()=>{
    it('register flow',()=>{
        registerobj.openURL(registerData.openURL)
        registerobj.enterFirstName(registerData.firstName)
        registerobj.enterLastName(registerData.lastName)
        registerobj.enteremail(registerData.Email)
        registerobj.enterTelephone(registerData.Telephone)
        registerobj.enterPassword(registerData.password)
        registerobj.selectCheckBox()
        registerobj.clickOnContinue()
    })
})