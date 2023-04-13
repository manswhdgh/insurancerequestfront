import Layout from "../Layout/Layout";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import '../components/css/kiosk_common.css';
import 'globalthis/auto';
function Write(){
    let navigate = useNavigate();
    let loc = useLocation();

    const handleNextPage = (insurerInfo : Object) => {
        navigate("/chooseBeneficiary", {
            state: {
                selectInfo: loc.state.selectInfo,
                accidentType: loc.state.accidentType,
                insurerInfo: insurerInfo
            }
        });
    }

    const nextPage = () => {
        let insurerName = document.getElementById("insurer_name") as HTMLInputElement;
        let insurerNumberFront = document.getElementById("insurer_number_front") as HTMLInputElement;
        let insurerNumberBack = document.getElementById("insurer_number_back") as HTMLInputElement;
        let insurerPhoneFirst = document.getElementById("insurer_phone_first") as HTMLInputElement;
        let insurerPhoneSecond = document.getElementById("insurer_phone_second") as HTMLInputElement;
        let insurerPhoneThird = document.getElementById("insurer_phone_third") as HTMLInputElement;

        if(insurerName.value === ""){
            alert("피보험자 성함을 입력해주세요.");
            insurerName.focus();
            return;
        }

        if(insurerNumberFront.value === "" || insurerNumberBack.value === ""){
            alert("피보험자 주민등록번호를 입력해주세요.");
            insurerNumberFront.focus();
            return;
        }

        if(insurerPhoneFirst.value === "" || insurerPhoneSecond.value === "" || insurerPhoneThird.value === ""){
            alert("피보험자 연락처를 입력해주세요.");
            insurerPhoneFirst.focus();
            return;
        }

        let insurerInfo = {
            insurerName: insurerName.value,
            insurerNumber: insurerNumberFront.value + "-" + insurerNumberBack.value,
            insurerPhone: insurerPhoneFirst.value + "-" + insurerPhoneSecond.value + "-" + insurerPhoneThird.value
        };

        handleNextPage(insurerInfo);
    }

    useEffect(() => {
        console.log(loc.state)
    }, [loc]);

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - <span className="fw-bold fs-3 text-pink">청구서작성(2/5)</span> - 병원서류첨부 -
                    청구내용확인
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>피보험자(진료받으신)
                        정보를 입력하세요.
                    </div>
                    <input id="insurer_name" name="insurer_name" className="form-control py-6 mb-4 kiosk-input write-input" type="text"
                           placeholder="진료 받으신분(피보험자) 성함을 입력해주세요."
                           />
                        <div className="d-flex align-items-center mb-4">
                            <input id="insurer_number_front" name="insurer_number_front" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="주민등록번호 앞(6자리)"
                                   />
                                <div className="mx-4">-</div>
                                <input id="insurer_number_back" name="insurer_number_back" className="form-control py-6 kiosk-input write-input" type="tel"
                                       placeholder="주민등록번호 뒤(7자리)"
                                       />
                        </div>
                        <div className="d-flex align-items-center">
                            <input id="insurer_phone_first" name="insurer_phone_first" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="010"
                                   />
                                <div className="mx-4">-</div>
                                <input id="insurer_phone_second" name="insurer_phone_second" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="0000"
                                       />
                                    <div className="mx-4">-</div>
                                    <input id="insurer_phone_third" name="insurer_phone_third" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="0000"
                                           />
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

export default Write;