import React from "react";
import { reduxForm} from "redux-form";
import {createField, Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../components/common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit,error,  captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", Input, "email", [required])}
            {createField("Password", Input, "password", [required], {type: "password"} )}
            {createField(null, Input, "rememberMe", null,  {type: "checkbox"}, "remember me"  )}
            {  captchaUrl && <img src={ captchaUrl}/>}
            {  captchaUrl &&   createField("Symbols from image", Input, "captcha", [required]) }
            { error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}  captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login)