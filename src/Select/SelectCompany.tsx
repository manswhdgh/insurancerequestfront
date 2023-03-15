import '../components/css/common.css';
import Layout from "../Layout/Layout";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import 'globalthis/auto';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        virtualfaxyn?: string;
    }
}

function SelectCompany(){
    let navigate = useNavigate();
    const handleNextPage = (infos : any) => {
        navigate('/choose', {
            state: {
                infos: infos
            }
        })
    }

    function nextStep(){
        let selectArr = [];
        let companyChecked = document.querySelectorAll<HTMLInputElement>('input[name="company_check_box"]:checked');

        if(companyChecked.length === 0){
            alert("보험사를 선택해주세요.");
            return;
        }

        for(let i = 0; i < companyChecked.length; i++){
            let tempArr = {
                "name": companyChecked[i].value,
                "virtualfax": companyChecked[i].getAttribute("virtualfaxyn"),
                "faxnumber" : "",
                "display" : companyChecked[i].getAttribute("virtualfaxyn") === "No" ? "d-none" : "d-flex"
            };
            selectArr.push(tempArr);
        }

        handleNextPage(selectArr);
    }
    useEffect(() => {

    }, []);

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5"><span className="fw-bold fs-3 text-pink">보험사선택</span> - 청구서작성 - 병원서류첨부 - 전송
                </div>

                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-list-check me-2"></i>손해보험사</div>
                    <div className="row mb-3">
                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="AIG손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/AIG손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">AIG손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="AXA손해보험" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/AXA손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">AXA손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="DB손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/DB손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">DB손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="KB손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/KB손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">KB손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="MG손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/MG손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">MG손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="NH농협손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/NH농협손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">NH농협손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="롯데손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/롯데손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">롯데손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="메리츠화재" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/메리츠화재.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">메리츠화재</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="삼성화재" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/삼성화재.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">삼성화재</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="처브손해" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/처브손해.png" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">처브손해</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="하나손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/하나손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">하나손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="한화손해보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/한화손해보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">한화손해보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="현대해상화재" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/현대해상화재.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">현대해상화재</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="흥국화재" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/흥국화재.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">흥국화재</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="신협공제" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/신협공제.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">신협공제</div>
                            </span>
                        </label>

                        <label className="col-3 px-1">

                        </label>
                    </div>



                </div>

                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-list-check me-2"></i>생명보험사</div>
                    <div className="row d-flex mb-3">
                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="ABL생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/ABL생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">ABL생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="AIA생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/AIA생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">AIA생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="BNP파리바카디프생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/BNP파리바카디프생명.png" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">BNP파리바카디프생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="DB생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/DB생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">DB생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="DGB생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/DGB생명.png" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">DGB생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="KB라이프생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/KB라이프생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">KB라이프생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="KDB생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/KDB생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">KDB생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="NH농협생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/NH농협생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">NH농협생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="교보생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/교보생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">교보생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="동양생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/동양생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">동양생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="라이나생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/라이나생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">라이나생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="메트라이프생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/메트라이프생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">메트라이프생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="미래에셋생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/미래에셋생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">미래에셋생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="삼성생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/삼성생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">삼성생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="신한라이프" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/신한라이프.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">신한라이프</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="오렌지라이프" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/오렌지라이프.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">오렌지라이프</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="우체국보험" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/우체국보험.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">우체국보험</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="처브라이프생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/처브라이프생명.png" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">처브라이프생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="푸르덴셜생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/푸르덴셜생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">푸르덴셜생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="푸본현대생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/푸본현대생명.png" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">푸본현대생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="하나생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/하나생명.png" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">하나생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="한화생명" virtualfaxyn="Yes" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/한화생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">한화생명</div>
                            </span>
                        </label>

                        <label className="col-4 px-1 mb-3">
                            <input className="d-none" value="흥국생명" virtualfaxyn="No" name="company_check_box" type="checkbox"/>
                            <span className="btn border border-5 check-btn rounded-3 p-4">
                                <img src="/image/company/흥국생명.svg" className="d-block w-100" alt="..."/>
                                <div className="fs-4 mt-2">흥국생명</div>
                            </span>
                        </label>
                    </div>
                </div>

                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 px-5 py-6 fs-3 w-100 me-4" onClick={() => history.back()}><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 px-5 py-6 fs-3 w-100 ms-4" onClick={() => nextStep()}><i
                            className="bi bi-check2-circle me-2"></i>네
                            [청구서작성]
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default SelectCompany;