import Layout from "../Layout/Layout";

function Login() {
    return (

        <main className="form-signin text-center bg-light d-flex" style={{minHeight:"100vh", minWidth:"100vh"}}>
            <form className="align-self-center justify-content-center mx-auto" style={{minWidth:"350px"}}>
                <img className="mb-4" src="/image/logo/bocare_white.svg" alt="" width="150" />
                <h1 className="h3 mb-3 fw-normal">로그인</h1>

                <div className="form-floating mb-1">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>ID(이메일)</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label>Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> 아이디 저장
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
                <p className="mt-5 mb-3 text-muted">BOCARE 고객센터 1566-4875</p>
            </form>
        </main>

    );
}

export default Login;