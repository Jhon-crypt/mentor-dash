/* eslint-disable react/no-unknown-property */
import { SiCodementor } from "react-icons/si";
import SignupForm from "../forms/signupForm";
import { Link } from "react-router-dom";
export default function SignupContainer() {

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
                                    <p>Enter your details to create your account</p>
                                </div>

                                <SignupForm />
                                <div class="authent-login">
                                    <p>Already have an account? <Link to="/">Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}