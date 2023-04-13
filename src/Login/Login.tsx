import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {loginUser} from "../components/Jwt/User";
import setRefreshToken from "../components/Jwt/Cookie";
import {SET_TOKEN} from "../components/Jwt/Auth";
import { ErrorMessage } from '@hookform/error-message';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onValid = async ({ account, password }:any) => {
        // input 태그 값 비워주는 코드
        setValue("password", "");

        // 백으로부터 받은 응답
        const response = await loginUser({ account, password });

        if (response.status) {
            // 쿠키에 Refresh Token, store에 Access Token 저장
            setRefreshToken(response.json.refresh_token);
            dispatch(SET_TOKEN(response.json.access_token));

            return navigate("/");
        } else {
            console.log(response.json);
        }
    };

    return (
        <main className="form-signin text-center bg-light d-flex" style={{minHeight:"100vh", minWidth:"100vh"}}>
            <form onSubmit={handleSubmit(onValid)} className="align-self-center justify-content-center mx-auto" style={{minWidth:"350px"}}>
                <img className="mb-4" src="/image/logo/bocare_white.svg" alt="" width="150" />
                <h1 className="h3 mb-3 fw-normal">로그인</h1>

                <div className="form-floating mb-1">
                    <input type="text" className="form-control" id="account" placeholder="name@example.com" {...register("account", {required: "ID(이메일)를 입력해주세요."})} />
                    <label>ID(이메일)</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" placeholder="Password" {...register("password", {required: "비밀번호를 입력해주세요."})} />
                    <ErrorMessage
                        name="account"
                        errors={errors}
                        render={( { message }) =>
                            <p className="text-sm font-medium text-rose-500">
                                { message }
                            </p>
                        }
                    />
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