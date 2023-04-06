import AdminLayout from "../Layout/AdminLayout";
import '../components/css/admin_dashboard.css';
import '../components/css/admin_dashboard_rtl.css';

function AdminManagement(){
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
                            <h1 className="h2">키오스크 관리</h1>
                        </div>
                        <div className="row">
                            <div className="col-12  mb-3">
                                <div className="card p-3">
                                    <div className="fs-5 fw-bold pb-3 border-bottom">메인페이지</div>
                                    <div className="row mt-3">
                                        <div className="col-2 fs-6 fw-bold  align-self-center">이미지</div>
                                        <div className="col-10 fs-6">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault1"/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        기본 이미지(제공 이미지)
                                                    </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault2" checked/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        이미지 첨부
                                                    </label>
                                                    <div className="input-group mt-1">
                                                        <input type="file" className="form-control"
                                                               placeholder="Username" aria-label="Username"
                                                               aria-describedby="basic-addon1"/>
                                                            <button className="btn btn-outline-secondary" type="button"
                                                                    id="button-addon2">삭제
                                                            </button>
                                                    </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card p-3">
                                    <div className="fs-5 fw-bold pb-3 border-bottom">가입 정보</div>

                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <th scope="row">가입자</th>
                                            <td id="ins_type">김원장</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">구매일</th>
                                            <td id="ins_name">2023.04.24</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">이용기간</th>
                                            <td id="ins_name">2023.04.24. 00:00 ~ 2023.05.24. 00:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">결제 정보(월 결제)</th>
                                            <td id="info_name">
                                                비씨카드<br/>0000-0000-0000-0000/28/04<br/>
                                                ※ 결제 카드 정보는 고객센터로 연락주시면 변경 가능합니다.<br/>
                                                ※ 해당 이용료(10만원)은 월 200건의 기본 사용료입니다. 추가 건수는 건당 500원의 사용료가 추가됩니다.<br/>
                                                ※ 이용기간 마지막날 자동 결제되며 해당 영수증은 입력해주신 이메일로 발송됩니다.
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">이메일 주소</th>
                                            <td id="info_number">akak@naver.com</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    ※ 궁금하신 사항은 보케어 고객센터(1566-4875)로 연락주시기 바랍니다.<br/>
                                    ※ 해당 태블릿 무상 A/S기간은 1년이며 이후에는 유상으로 진행됩니다.
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="d-flex pb-5">
                            <div className="ms-auto">
                                <button type="button" id="downloadAll" className="btn btn-outline-secondary me-1">취소
                                </button>
                                <button type="button" id="downloadAll" className="btn btn-bocare me-1">저장</button>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminManagement;