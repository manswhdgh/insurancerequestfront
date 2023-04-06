import AdminLayout from "../../Layout/AdminLayout";
import '../../components/css/admin_dashboard.css';
import '../../components/css/admin_dashboard_rtl.css';

function AdminInsuranceResultDetail(){
    return(
        <AdminLayout>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/kiosk_insurance_admin/">
                                        <span data-feather="home"></span>
                                        보험금청구
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page"
                                       href="/kiosk_insurance_admin/management/">
                                        <span data-feather="home"></span>
                                        키오스크 관리
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">보험금청구 상세내역</h1>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="card h-100 p-3">
                                    <div className="fs-5 fw-bold pb-3 border-bottom">청구인 정보</div>
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <th scope="row">보험사구분</th>
                                            <td id="ins_type">손해보험</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">보험사명</th>
                                            <td id="ins_name">KB손해보험</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">청구인 이름</th>
                                            <td id="info_name">김지영</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">청구인 주민번호</th>
                                            <td id="info_number">7104221111111</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">청구인 연락처</th>
                                            <td id="info_phone">01012341234</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">청구인 이메일</th>
                                            <td id="info_email">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">피보험자 이름</th>
                                            <td id="info_tname">김지영</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">피보험자 주민번호</th>
                                            <td id="info_tnumber">7104221111111</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">피보험자 직장명</th>
                                            <td id="info_company">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">피보험자 담당업무</th>
                                            <td id="info_tjob">-</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">대표번호</th>
                                            <td id="fax_number">00000000000</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="card p-3">
                                    <div className="fs-5 fw-bold pb-3 border-bottom">청구서 정보</div>
                                    <div className="row mt-3">
                                        <div className="col-2 fs-6 fw-bold  align-self-center">청구서 사인</div>
                                        <div className="col-5">
                                            <div className="border p-3">
                                                <div className="w-100 align-self-center text-center">
                                                    <img id="ins_claimant_signature" className="img-fluid"
                                                         src="/images/img1.jpg"
                                                         alt="청구인 서명"/>
                                                        <div className="mt-2">청구인 서명</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="border p-3">
                                                <div className="w-100 align-self-center text-center">
                                                    <img id="ins_insurer_signature" className="img-fluid"
                                                         src="/images/img1.jpg"
                                                         alt="피보험자 서명"/>
                                                        <div className="mt-2">피보험자 서명</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-12 fs-6 fw-bold mb-3">청구 서류</div>
                                        <div id="file_wrapper" className="row mt-5">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="d-flex pb-5">
                            <div className="">
                                <a href="/kiosk_insurance_admin/index.html"
                                   className="btn btn-outline-primary me-1">리스트</a>

                            </div>
                            <div className="ms-auto">
                                <button type="button" id="downloadAll" className="btn btn-primary me-1">재청구하기
                                </button>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminInsuranceResultDetail;