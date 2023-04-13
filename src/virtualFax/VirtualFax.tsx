import {useEffect, useState} from "react";
import InsCard from "./Card/InsCard";
import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../Layout/Layout";
import '../components/css/kiosk_common.css';
import 'globalthis/auto';

function VirtualFax() {
    let navigate = useNavigate();
    let loc = useLocation();
    const [selectedCompany, setSelectedCompany]: any = useState();

    const nextPage = () => {
        let faxNumElements = document.getElementsByName("virtualFaxNumber") as NodeListOf<HTMLInputElement>;

        faxNumElements.forEach((element: any) => {
            if (element.value === "" && element.classList.contains("d-flex")) {
                alert("가상팩스번호를 입력해주세요.");
                element.focus();
                return;
            }
        });

        for (let i = 0; i < selectedCompany.length; i++) {
            selectedCompany[i]['faxnumber'] = faxNumElements[i].value;
        }

        navigate("/choose", {
            state: {
                selectInfo: selectedCompany
            }
        });
    }

    useEffect(() => {
        setSelectedCompany(loc.state.selectInfo);
    }, [selectedCompany]);

    return (
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5"><span className="fw-bold fs-3 text-pink">보험사선택</span> - 청구서작성 - 병원서류첨부 - 전송
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-telephone me-2"></i>선택 하신
                        보험사는 <span
                            className="text-primary" style={{textDecoration: "underline"}}>가상팩스번호</span>가 필요합니다.
                    </div>
                    {
                        selectedCompany && selectedCompany.length > 0 && selectedCompany.map((info: any, index: number) => {
                            return <InsCard key={index} insCompanyInfo={info}/>
                        })
                    }
                </div>

                <div className="footer-fix">
                    <div className="d-flex container">
                        {/* eslint-disable-next-line no-restricted-globals */}
                        <button type="button" className="btn btn-secondary my-4 p-5 py-6 fs-3 w-100 me-5" onClick={() => history.back()}><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 p-5 py-6 fs-3 w-100 ms-5"
                                onClick={() => nextPage()}><i
                            className="bi bi-check2-circle me-2"></i>네
                            [청구서작성]
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default VirtualFax;