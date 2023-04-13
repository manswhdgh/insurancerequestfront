import Layout from "../Layout/Layout";
import 'globalthis/auto';
import '../components/css/kiosk_common.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function ChooseBeneficiary(){
    let navigate = useNavigate();
    let loc = useLocation();

    const [beneficiaryExist, setBeneficiaryExist] = useState("No");

    const nextPage = () => {
        let navigateUrl = "/chooseSendType";

        if(beneficiaryExist === "Yes"){
            navigateUrl = "/writeBeneficiary";
        }

        navigate(navigateUrl, {
            state: {
                selectInfo: loc.state.selectInfo,
                accidentType: loc.state.accidentType,
                insurerInfo: loc.state.insurerInfo,
                beneficiaryExist: beneficiaryExist,
                beneficiaryInfo: "None"
            }
        });
    }

    useEffect(()=>{
        console.log(loc.state);

    }, [loc]);

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - <span className="fw-bold fs-3 text-pink">청구서작성(3/5)</span> - 병원서류첨부 -
                    청구내용확인
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>피보험자 동일
                        여부를 체크하세요.
                    </div>
                    <div className="mb-3">
                        <input type="radio" className="btn-check me-4" name="beneficiary_exist" id="btn01"
                               autoComplete="off" value="No" onClick={() => setBeneficiaryExist("No")}/>
                            <label
                                className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                                htmlFor="btn01" style={{height:"350px"}}><i className="bi bi-circle fs-0_5 mb-4"></i>피보험자(진료
                                받은 분)와<br/>수익자가
                                    동일</label>

                            <input type="radio" className="btn-check me-4" name="beneficiary_exist" id="btn02"
                                   autoComplete="off" value="Yes" onClick={() => setBeneficiaryExist("Yes")}/>
                                <label
                                    className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 w-100 fs-1"
                                    htmlFor="btn02" style={{height:"350px"}}><i className="bi bi-x-circle fs-0_5 mb-4"></i>피보험자(진료받은분)와<br/>수익자가
                                    다름</label>
                    </div>
                </div>
                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 px-5 py-6 fs-3 w-100 me-4" onClick={() => history.back()}><i
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

export default ChooseBeneficiary;