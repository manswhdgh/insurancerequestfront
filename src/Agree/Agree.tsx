import Layout from "../Layout/Layout";
import '../components/css/common.css';
import {useState} from "react";
import ModalPortal from "../Layout/Modal/ModalPortal";
import CreditInsModal from "./Modal/CreditInsModal";
import CreditDevModal from "./Modal/CreditDevModal";
import CreditLogModal from "./Modal/CreditLogModal";

function Agree(){
    const [creditInsModalOpen, setCreditInsModalOpen] = useState<boolean>();
    const [creditDevModalOpen, setCreditDevModalOpen] = useState<boolean>();
    const [creditLogModalOpen, setCreditLogModalOpen] = useState<boolean>();

    const HandleCreditInsModalShow = () => {
        setCreditInsModalOpen(false);
    };

    const HandleCreditDevModalOpenShow = () => {
        setCreditDevModalOpen(false);
    };

    const HandleCreditLogModalOpenShow = () => {
        setCreditLogModalOpen(false);
    };

    const CheckAll = () => {
        let checkAllButton = document.getElementById("checkAll") as HTMLInputElement;
        document.getElementsByName("checkAgree").forEach((el) => {
            let item = el as HTMLInputElement;
            item.checked = checkAllButton.checked;
        });
    }

    const AvailableNext = () => {
        let checkIns = document.getElementById("checkCreditIns") as HTMLInputElement;
        let checkDev = document.getElementById("checkCreditDev") as HTMLInputElement;

        if(checkIns.checked && checkDev.checked){
           window.location.href = "/select";
        } else{
            alert("필수 동의 항목에 동의해주세요.");
        }
    }

    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">잠깐! 청구 전 개인정보 동의는 필수<i className="bi bi-emoji-smile ms-2"></i></div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-list-check me-2"></i>개인정보 수집 및
                        이용동의
                    </div>
                    <div className="border border-5 rounded-3 p-3 mb-3 w-100">
                        <div className="d-flex form-check">
                            <input className="form-check-input" type="checkbox" id="checkAll" onClick={() => CheckAll()}/>
                                <label className="form-check-label text-start mt-1 ms-4 fs-4 w-100" htmlFor="checkAll">
                                    전체동의
                                </label>
                        </div>
                    </div>

                    <div className="border border-5 rounded-3 p-3 mb-3 w-100">
                        <div className="d-flex align-items-center form-check">
                            <div>
                                <input className="form-check-input" type="checkbox" value="" id="checkCreditIns" name="checkAgree"/>
                                    <label className="form-check-label text-start mt-1 ms-4 fs-4" htmlFor="Check01"
                                           style={{textDecoration:"underline"}}>
                                        보험금 청구를 위한 개인(신용) 정보 처리 동의(필수 동의)
                                    </label>
                            </div>
                            <a className="ms-auto" onClick={() => setCreditInsModalOpen(true)}>
                                <i className="bi bi-justify fs-2"></i>
                            </a>
                        </div>
                    </div>

                    {creditInsModalOpen && (
                        <ModalPortal>
                            <CreditInsModal onClose={HandleCreditInsModalShow} isOpen={true}/>
                        </ModalPortal>
                    )}

                    <div className="border border-5 rounded-3 p-3 mb-3 w-100">
                        <div className="d-flex align-items-center form-check">
                            <div>
                                <input className="form-check-input" type="checkbox" value="" id="checkCreditDev" name="checkAgree"/>
                                    <label className="form-check-label text-start mt-1 ms-4 fs-4" htmlFor="Check02"
                                           style={{textDecoration:"underline"}}>
                                        청구 대행 서비스 제공을 위한 개인정보 처리 동의(필수 동의)
                                    </label>
                            </div>
                            <a className="ms-auto" onClick={() => setCreditDevModalOpen(true)}>
                                <i className="bi bi-justify fs-2"></i>
                            </a>
                        </div>
                    </div>

                    {creditDevModalOpen && (
                        <ModalPortal>
                            <CreditDevModal onClose={HandleCreditDevModalOpenShow} isOpen={true}/>
                        </ModalPortal>
                    )}

                    <div className="border border-5 rounded-3 p-3 mb-3 w-100">
                        <div className="d-flex align-items-center form-check">
                            <div>
                                <input className="form-check-input" type="checkbox" value="" id="checkCreditLog" name="checkAgree"/>
                                    <label className="form-check-label text-start mt-1 ms-4 fs-4" htmlFor="Check03"
                                           style={{textDecoration:"underline"}}>
                                        안내, 청구 이력 등의 관리를 위한 제3자 정보 제공(선택 동의)
                                    </label>
                            </div>
                            <a className="ms-auto" onClick={() => setCreditLogModalOpen(true)}>
                                <i className="bi bi-justify fs-2"></i>
                            </a>
                        </div>
                    </div>

                    {creditLogModalOpen && (
                        <ModalPortal>
                            <CreditLogModal onClose={HandleCreditLogModalOpenShow} isOpen={true}/>
                        </ModalPortal>
                    )}
                </div>

                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 p-5 py-6 fs-3 w-100 me-5" onClick={() => history.back()}><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 p-5 py-6 fs-3 w-100 ms-5" onClick={() => AvailableNext()}><i
                            className="bi bi-check2-circle me-2"></i>네
                            [청구서작성]
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Agree;