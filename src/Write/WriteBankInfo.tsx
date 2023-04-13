import Layout from "../Layout/Layout";

function WriteBankInfo(){
    return(
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">보험사선택 - <span className="fw-bold fs-3 text-pink">청구서작성(5/5)</span> - 병원서류첨부 -
                    청구내용확인
                </div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-check2-circle me-2"></i>보험금을 받으실 계좌 정보를 입력하세요.
                    </div>
                    <input id="insurer_name" name="insurer_name" className="form-control py-6 mb-4 kiosk-input write-input" type="text"
                           placeholder="은행명"
                           />
                    <input id="insurer_name" name="insurer_name" className="form-control py-6 mb-4 kiosk-input write-input" type="text"
                           placeholder="'-'없이 숫자만 입력"
                           />
                    <input id="insurer_name" name="insurer_name" className="form-control py-6 mb-4 kiosk-input write-input" type="text"
                           placeholder="예금주 성함"
                           />
                    
                       
                </div>
                <div className="footer-fix">
                    <div className="d-flex container">
                        <button type="button" className="btn btn-secondary my-4 px-5 py-6 fs-3 w-100 me-4"><i
                            className="bi bi-arrow-left-square me-2"></i>아니오 [뒤로가기]
                        </button>
                        <button type="button" className="btn btn-pink my-4 px-5 py-6 fs-3 w-100 ms-4"><i
                            className="bi bi-check2-circle me-2"></i>네
                            [청구서작성]
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default WriteBankInfo;