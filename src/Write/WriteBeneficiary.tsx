import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../Layout/Layout";
import {useState} from "react";

function WriteBeneficiary(){
    let navigate = useNavigate();
    let loc = useLocation();

    const [beneficiaryInfo, setBeneficiaryInfo]:any = useState();

    const handleNextPage = () => {
        navigate("/chooseSendType", {
            state: {
                selectInfo: loc.state.selectInfo,
                accidentType: loc.state.accidentType,
                insurerInfo: loc.state.insurerInfo,
                beneficiaryExist: loc.state.beneficiaryExist,
                beneficiaryInfo: beneficiaryInfo
            }
        });
    }

    const nextPage = () => {
        let beneficiaryName = document.getElementById("beneficiary_name") as HTMLInputElement;
        let beneficiaryNumberFront = document.getElementById("beneficiary_number_front") as HTMLInputElement;
        let beneficiaryNumberBack = document.getElementById("beneficiary_number_back") as HTMLInputElement;
        let beneficiaryPhoneFirst = document.getElementById("beneficiary_phone_first") as HTMLInputElement;
        let beneficiaryPhoneSecond = document.getElementById("beneficiary_phone_second") as HTMLInputElement;
        let beneficiaryPhoneThird = document.getElementById("beneficiary_phone_third") as HTMLInputElement;

        if(beneficiaryName.value === ""){
            alert("수익자 성함을 입력해주세요.");
            beneficiaryName.focus();
            return;
        }

        if(beneficiaryNumberFront.value === "" || beneficiaryNumberBack.value === ""){
            alert("수익자 주민등록번호를 입력해주세요.");
            beneficiaryNumberFront.focus();
            return;
        }

        if(beneficiaryPhoneFirst.value === "" || beneficiaryPhoneSecond.value === "" || beneficiaryPhoneThird.value === ""){
            alert("수익자 연락처를 입력해주세요.");
            beneficiaryPhoneFirst.focus();
            return;

        }

        setBeneficiaryInfo({
            beneficiaryName: beneficiaryName.value,
            beneficiaryNumber: beneficiaryNumberFront.value + "-" + beneficiaryNumberBack.value,
            beneficiaryPhone: beneficiaryPhoneFirst.value + "-" + beneficiaryPhoneSecond.value + "-" + beneficiaryPhoneThird.value
        })

        handleNextPage();
    }

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - <span className="fw-bold fs-3 text-pink">청구서작성(4/5)</span> - 병원서류첨부 -
                    청구내용확인
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>수익자
                        정보를 입력하세요.
                    </div>
                    <input id="beneficiary_name" name="beneficiary_name" className="form-control py-6 mb-4 kiosk-input write-input" type="text"
                           placeholder="수익자 성함을 입력해주세요."
                    />
                    <div className="d-flex align-items-center mb-4">
                        <input id="beneficiary_number_front" name="beneficiary_number_front" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="주민등록번호 앞(6자리)"
                        />
                        <div className="mx-4">-</div>
                        <input id="beneficiary_number_back" name="beneficiary_number_back" className="form-control py-6 kiosk-input write-input" type="tel"
                               placeholder="주민등록번호 뒤(7자리)"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <input id="beneficiary_phone_first" name="beneficiary_phone_first" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="010"
                        />
                        <div className="mx-4">-</div>
                        <input id="beneficiary_phone_second" name="beneficiary_phone_second" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="0000"
                        />
                        <div className="mx-4">-</div>
                        <input id="beneficiary_phone_third" name="beneficiary_phone_third" className="form-control py-6 kiosk-input write-input" type="tel" placeholder="0000"
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

export default WriteBeneficiary;