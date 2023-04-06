import '../components/css/kiosk_common.css';
import Layout from "../Layout/Layout";
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';

function Introduce(){
    let navigate = useNavigate();
    const nextPage = () => {
        navigate("/insuranceMain");
    }

    return(
        <Layout>
            <main className="container main_pd text-center">
                <a onClick={() => nextPage()} className='d-block'>
                <div className="py-5">
                    <img src="/image/main_title.svg" className="d-block w-100" alt="..."/>
                </div>
                </a>
            </main>
        </Layout>
    );
}

export default Introduce;