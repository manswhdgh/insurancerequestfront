import '../components/css/kiosk_common.css';
import Layout from "../Layout/Layout";
import 'globalthis/auto';

function InsuranceMain(){
    return (
        <Layout>
            <main className="container main_pd text-center">
                <div className="fs-0_5 fw-bold">보험금 청구</div>
                <div className="fs-4 mb-5">쉽고 간편하게 보험사에 전달하세요.</div>
                <div className="py-5">
                    <div className="fs-2 fw-bold text-start mb-2"><i className="bi bi-list-check me-2"></i>보험금청구 필요서류</div>
                    <div className="fs-3 d-flex" style={{height:"300px"}}>
                        <div className="d-flex align-items-center justify-content-center border p-3 py-5 w-25 bg-light fs-2">공통
                        </div>
                        <div className="d-flex align-items-center border p-3 text-start w-75 fs-2">청구인 신분증 (사진 촬영 후 업로드 가능)</div>
                    </div>
                    <div className="fs-3 d-flex" style={{height:"300px"}}>
                        <div className="d-flex align-items-center justify-content-center border p-3 py-5 w-25 bg-light fs-2">통원
                        </div>
                        <div className="border d-flex align-items-center  p-3 text-start w-75 fs-2">
                            <div>
                                <div>1. (택1) <span className="fw-bold">(통원일자별)처방전 / 통원(진료)확인서 / 진단서</span></div>
                                <div>2. <span className="fw-bold">진료비 계산서</span></div>
                                <div>3. <span className="fw-bold">진료비세부내역서</span> (비급여가 없는 경우 생략 가능)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-pink my-4 p-5 fs-3 w-100" onClick={() => {window.location.href="/agree";}}><i
                    className="bi bi-check2-circle me-2"></i>네 [청구서작성]
                </button>
            </main>
        </Layout>
    );
}

export default InsuranceMain; // src\main\InsuranceMain.tsx