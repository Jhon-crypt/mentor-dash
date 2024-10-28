/* eslint-disable react/no-unknown-property */
import { SiCodementor } from "react-icons/si";
import LoginForm from "../forms/loginForm";
export default function LoginContainer() {

    return (

        <>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-12 col-lg-4">
                        <div class="card login-box-container">
                            <div class="card-body">
                                <div class="authent-logo">
                                    <a href="#"><SiCodementor size={30} /> Mentor-Dash</a>
                                </div>
                                <div class="authent-text">
                                    <p>Analytics for mentors on codementor</p>
                                    <p>Please Sign-in to your account.</p>
                                </div>

                                <LoginForm />
                               
                                <div class="authent-reg">
                                    <p>Not registered? <a href="register.html">Create an account</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}