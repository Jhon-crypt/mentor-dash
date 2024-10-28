/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom"
export default function SignupForm() {

    return (

        <>

            <form>
                <div class="mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Fullname" />
                        <label for="floatingInput">Fullname</label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput1" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword1" placeholder="Confirm Password" />
                        <label for="floatingPassword">Confirm Password</label>
                    </div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I agree the <a href="#">Terms and Conditions</a></label>
                </div>
                <div class="d-grid">
                    {/*}
                    <button type="submit" class="btn btn-primary m-b-xs">Register</button>
                    {*/}
                    <Link to="/dashboard" class="btn btn-primary m-b-xs">Register</Link>

                </div>
            </form>

        </>

    )

}