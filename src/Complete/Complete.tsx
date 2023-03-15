import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../Layout/Layout";
import {useEffect, useState} from "react";

function Complete(){
    let navigate = useNavigate();
    let loc = useLocation();
    const [selectedCompany, setSelectedCompany]:any = useState();
    const [insurerInfo, setInsurerInfo]:any = useState();

    useEffect(()=>{
        setSelectedCompany(loc.state.infos);
        setInsurerInfo(loc.state.insurerInfo);

        console.log(loc.state.infos);
        console.log(loc.state.insurerInfo);
    }, [loc]);

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - 청구서작성 - 병원서류첨부 - <span className="fw-bold fs-3 text-pink">전송</span>
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>청구 전 마지막으로
                        확인하세요.
                    </div>
                    <div className="d-flex mb-3 w-100 border">
                        <div className="w-75 text-start p-5">
                            <div className="fs-1 mb-4">인적사항</div>
                            <div className="d-flex fs-3 w-100 mb-3">
                                <div className="w-50">· 진료받으신 환자</div>
                                <div className="w-50 fw-bold text-primary">{"테스트"}</div>
                            </div>
                            <div className="d-flex fs-3 w-100 mb-3">
                                <div className="w-50">· 주민등록번호</div>
                                <div className="w-50 fw-bold text-primary">{"950706-1111111"}</div>
                            </div>
                            <div className="d-flex fs-3 w-100">
                                <div className="w-50">· 연락처</div>
                                <div className="w-50 fw-bold text-primary">{"010-1234-1234"}</div>
                            </div>
                            <hr className="secondary mt-4"/>
                                <div className="fs-1 mb-4">청구내용</div>
                                <div className="fs-3 fw-bold text-primary">질병 / 내과</div>
                        </div>
                        <div className="d-flex align-items-center w-25 bg-light fs-4 p-4">
                            <div>보험금청구는 각 보험사 사정에 따라 <span className="fw-bold">1-2일이 소요</span>됩니다.</div>
                        </div>
                    </div>
                </div>
                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 p-4 fs-3 w-100 me-5" onClick={() => history.back()}><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 p-5 fs-3 w-100 ms-5"><i
                            className="bi bi-send me-2"></i>보험사에 파일
                            전송
                        </button>
                    </div>
                </div>

            </main>
        </Layout>
    );
}

export default Complete;