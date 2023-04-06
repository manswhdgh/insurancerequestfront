import Layout from "../Layout/Layout";
import '../components/css/kiosk_common.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ModalPortal from "../Layout/Modal/ModalPortal";
import CreditLogModal from "../Agree/Modal/CreditLogModal";
import SendTypeModal from "./Modal/SendTypeModal";


function ChooseSendType(){
    let navigate = useNavigate();
    let loc = useLocation();

    const [selectedCompany, setSelectedCompany]:any = useState();
    const [insurerInfo, setInsurerInfo]:any = useState();
    const [sendTypeModalOpen, setSendTypeModalOpen] = useState<boolean>();

    const HandleSendTypeModalShow = () => {
        setSendTypeModalOpen(false);
    };

    const nextPage = () => {
        navigate("/complete",{
            state: {
                selectInfo: loc.state.selectInfo,
                accidentType: loc.state.accidentType,
                insurerInfo: loc.state.insurerInfo,
                beneficiaryExist: loc.state.beneficiaryExist,
                beneficiaryInfo: loc.state.beneficiaryInfo
            }
        })
    }

    useEffect(()=>{
        console.log(loc.state);
    }, [loc]);

    return (
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - 청구서작성 - <span className="fw-bold fs-3 text-pink">병원서류첨부</span> - 청구내용확인
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>보험금청구 서류를
                        보내세요.
                    </div>
                    <div className="mb-3">
                        <input type="radio" className="btn-check me-4" name="options-outlined" id="btn_phone"
                               autoComplete="off" onClick={() => setSendTypeModalOpen(true)}/>
                            <label
                                className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 me-4 w-100 fs-1 mb-5"
                                htmlFor="btn_phone" style={{height:"350px"}} data-bs-toggle="modal"
                                data-bs-target="#picture_phone"><i
                                className="bi bi-camera fs-0_5 mb-4"
                                ></i>폰으로 사진 전송</label>

                            <input type="radio" className="btn-check me-4" name="options-outlined" id="btn_paper"
                                   autoComplete="off"/>
                                <label
                                    className="d-flex flex-column align-items-center justify-content-center btn btn-outline-primary p-4 w-100 fs-1"
                                    htmlFor="btn_paper" style={{height:"350px"}}><i className="bi bi-journal-check fs-0_5 mb-4"></i>관리자에게
                                    서류요청</label>
                    </div>
                </div>
                {sendTypeModalOpen && (
                    <ModalPortal>
                        <SendTypeModal onClose={HandleSendTypeModalShow} isOpen={true}/>
                    </ModalPortal>
                )}
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
    )
}

export default ChooseSendType;