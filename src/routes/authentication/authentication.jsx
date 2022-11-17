import SignUpForm from "../../components/signupform/signupform.component";
import SignInForm from "../../components/signinform/signinform.component";
import './authentication.styles.scss'
const Authentication = () =>{



    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default Authentication;