/* eslint-disable react/no-unknown-property */
export default function LoginForm() {

    return (

        <>
            <form>
                <div class="mb-3">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    {/*}
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    {*/}
                </div>
                <div class="d-grid">
                    <button type="submit" class="btn btn-info m-b-xs">Sign In</button>
                    <button class="btn btn-primary">Facebook</button>
                </div>
            </form>
        </>

    )

}