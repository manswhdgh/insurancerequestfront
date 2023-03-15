import Layout from "../Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import '../components/css/common.css';
import 'globalthis/auto';

function Choose(){
    let navigate = useNavigate();
    let loc = useLocation();
    const [selectedCompany, setSelectedCompany]:any = useState();

    const nextPage = () => {
        navigate("/write" , {
            state: {
                infos: selectedCompany
            }
        });
    }

    useEffect(()=>{
        setSelectedCompany(loc.state.infos);
    }, [loc]);

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - <span className="fw-bold fs-3 text-pink">청구서작성(1/3)</span> - 병원서류첨부 -
                    전송
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>사고유형을
                        선택하세요.
                    </div>
                    <div className="mb-3">
                        <input type="radio" className="btn-check me-4" name="options-outlined" id="btn01"
                               autoComplete="off"/>
                        <label
                            className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                            htmlFor="btn01" style={{height:"400px"}}><i
                            className="bi bi-lungs fs-0_5 mb-4"></i>질병</label>

                        <input type="radio" className="btn-check me-4" name="options-outlined" id="btn02"
                               autoComplete="off"/>
                        <label
                            className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                            htmlFor="btn02"><i className="bi bi-bandaid fs-0_5 mb-4"></i>상해</label>

                        <input type="radio" className="btn-check me-4" name="options-outlined" id="btn03"
                               autoComplete="off"/>
                        <label
                            className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                            htmlFor="btn03"><i className="bi bi-scooter fs-0_5 mb-4"></i>교통사고</label>
                    </div>
                </div>
                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 p-5 py-6 fs-3 w-100 me-5" onClick={() => history.back()}><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 p-5 py-6 fs-3 w-100 ms-5" onClick={() => nextPage()}><i
                            className="bi bi-check2-circle me-2"></i>네
                            [청구서작성]
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Choose; // src\Choose\Choose.tsx