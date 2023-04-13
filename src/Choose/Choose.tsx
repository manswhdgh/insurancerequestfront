import Layout from "../Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import '../components/css/kiosk_common.css';
import 'globalthis/auto';

function Choose(){
    let navigate = useNavigate();
    let loc = useLocation();
    const [selectedCompany, setSelectedCompany]: any = useState();

    const nextPage = () => {
        navigate("/write" , {
            state: {
                selectInfo: selectedCompany,
                accidentType: document.querySelector<HTMLInputElement>("input[name='accidentType']:checked")?.value
            }
        });
    }

    useEffect(() => {
        setSelectedCompany(loc.state.selectInfo);
    }, [selectedCompany]);

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - <span className="fw-bold fs-3 text-pink">청구서작성(1/4)</span> - 병원서류첨부 -
                청구내용확인
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>사고유형을
                        선택하세요.
                    </div>
                    <div className="mb-3">
                        <input type="radio" className="btn-check me-4" name="accidentType" id="btn01"
                               autoComplete="off" value="disease"/>
                        <label
                            className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                            htmlFor="btn01" style={{height:"350px"}}><i
                            className="bi bi-lungs fs-0_5 mb-4"></i>질병</label>

                        <input type="radio" className="btn-check me-4" name="accidentType" id="btn02"
                               autoComplete="off" value="accident"/>
                        <label
                            className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                            htmlFor="btn02" style={{height:"350px"}}><i className="bi bi-bandaid fs-0_5 mb-4"></i>상해</label>

                        <input type="radio" className="btn-check me-4" name="accidentType" id="btn03"
                               autoComplete="off" value="carAccident"/>
                        <label
                            className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                            htmlFor="btn03" style={{height:"350px"}}><i className="bi bi-scooter fs-0_5 mb-4"></i>교통사고</label>
                    </div>
                </div>
                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 px-5 py-6 fs-3 w-100 me-4" onClick={() => window.location.href = `${location.origin}/select`}><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 px-5 py-6 fs-3 w-100 ms-4" onClick={() => nextPage()}><i
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