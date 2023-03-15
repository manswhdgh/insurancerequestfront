import Layout from "../Layout/Layout";

function Final(){
    return(
        <Layout>
            <main className="container main_pd text-center d-flex justify-content-center align-self-center align-items-center" style={{minHeight:"90vh"}}>
                <div>
               <i className="bi bi-check-circle-fill fs-0_5 mb-2"></i>
               <div className="fs-0_5 fw-bold mb-5">보험금 청구가<br/> 접수 대기중입니다.</div>
               <div className="fs-1 text-pink">
                해당 방법으로 서류를 첨부해주시면<br/>보험금 청구가 완료됩니다.
                <div className="mt-3 fw-bold">선택하신 첨부방법 : 폰으로 사진 전송
                <br/>
                청구 상태 : 미완료(서류첨부)</div>
               </div>
               </div>
               <div className="footer-fix">
                    <div className="d-flex container">
                        <button type="button" className="btn btn-secondary my-4 p-5 py-6 fs-3 w-100">처음으로
                        </button>
            
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Final;