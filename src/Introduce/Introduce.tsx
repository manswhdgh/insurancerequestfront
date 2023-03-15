import '../components/css/common.css';
import Layout from "../Layout/Layout";
import {useNavigate} from "react-router-dom";

function Introduce(){
    let navigate = useNavigate();
    const nextPage = () => {
        navigate("/insuranceMain");
    }

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="py-5">
                    <img src="/image/main_title.svg" className="d-block w-100" alt="..."/>
                </div>
                <div className="footer-fix">
                    <div className="d-flex container">
                        <button type="button" className="btn btn-pink my-4 p-4 fs-3 w-100 ms-5" onClick={() => nextPage()}><i
                            className="bi bi-check2-circle me-2"></i>네
                            [청구서작성]
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Introduce;