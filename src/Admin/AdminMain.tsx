import AdminLayout from "../Layout/AdminLayout";
import '../components/css/admin_dashboard.css';
import '../components/css/admin_dashboard_rtl.css';
import ModalPortal from "../Layout/Modal/ModalPortal";
import AdminFileAttachModal from "./Modal/AdminFileAttachModal";
import {useState} from "react";

function AdminMain(){
    const [adminFileAttachModalOpen, setAdminFileAttachModalOpen] = useState<boolean>();

    const HandleAdminFileAttachModalShow = () => {
        setAdminFileAttachModalOpen(false);
    };

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
                            <h1 className="h2">보험금청구 리스트</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">

                                <div className="btn-group">
                                    <button id="showAll" type="button" className="btn btn-sm btn-secondary">전체</button>
                                    <button id="showAll" type="button"
                                            className="btn btn-sm btn-outline-secondary">접수대기
                                    </button>
                                    <button id="showComplete" type="button"
                                            className="btn btn-sm btn-outline-secondary">접수완료
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <div className="input-group search-box-size">
                                <input type="date" className="form-control" placeholder=""/> <span
                                    className="px-2 pt-1"> ~ </span> <input type="date" className="form-control"

                                                                            placeholder=""/>
                            </div>

                            <div className="input-group search-box-size ms-auto">

                                <input type="text" className="form-control" placeholder="이름, 연락처를 입력하세요."
                                       aria-label="이름, 연락처를 입력하세요."
                                       aria-describedby="customerSearchButton" id="searchKeyword" name="searchKeyword"/>
                                    <button className="btn btn-outline-secondary" type="button" id="searchButton"><i
                                        className="bi bi-search"></i></button>
                            </div>
                        </div>
                        <div id="billWrapper">
                            <div id="insuranceBillBody"></div>
                            {/*<div navigation="/v2/views/paging/page_navigator_v2.html"></div>*/}
                        </div>

                        <div className="table-responsive mb-3">
                            <table className="table table-striped table-hover table-sm">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">구분</th>
                                    <th scope="col">보험사</th>
                                    <th scope="col">신청인</th>
                                    <th scope="col">신청인 연락처</th>
                                    <th scope="col">접수일</th>
                                    <th scope="col">상세보기</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="py-2">인덱스</td>
                                    <td className="py-2">청구타입</td>
                                    <td className="py-2">이름</td>
                                    <td className="py-2">피보험자 이름</td>
                                    <td className="py-2">피보험자 전화번호</td>
                                    <td className="py-2">청구일시</td>
                                    <td><a className="btn btn-dark btn-sm" href="#" id="ins_detail_{{req_idx}}"
                                           role="button">청구버튼(완료, 첨부대기)</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2">20</td>
                                    <td className="py-2">손해보험</td>
                                    <td className="py-2">DB손해보험</td>
                                    <td className="py-2">이윤자</td>
                                    <td className="py-2">01011112222</td>
                                    <td className="py-2">2022-12-21 16:32</td>
                                    <td><a className="btn btn-outline-secondary btn-sm" href="#" role="button">접수완료</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2">19</td>
                                    <td className="py-2">손해보험</td>
                                    <td className="py-2">DB손해보험</td>
                                    <td className="py-2">이윤자</td>
                                    <td className="py-2">01011112222</td>
                                    <td className="py-2">2022-12-21 16:32</td>
                                    <td><a className="btn btn-pink btn-sm" href="#" role="button" onClick={() => setAdminFileAttachModalOpen(true)}>접수대기</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {adminFileAttachModalOpen && (
                            <ModalPortal>
                                <AdminFileAttachModal onClose={HandleAdminFileAttachModalShow} isOpen={true}/>
                            </ModalPortal>
                        )}

                        <div id="noDataDiv" className="col-md-12 text-center text-secondary card px-3 py-5 mt-3"
                             style={{display:"none"}}>
                            <div id="" className="fs-2 mb-2">보험금청구 완료 내역이 없습니다.</div>
                        </div>

                        <div id="noSearchData" className="col-md-12 text-center text-secondary card px-3 py-5 mt-3"
                             style={{display:"none"}}>
                            <div className="fs-2 mb-2">조회된 데이터가 없습니다.</div>
                            <div className="fs-5 mb-0">다시 확인해주세요.</div>
                            <div className="mt-4 fw-bold">
                                <button id="reloadButton" className="btn btn-outline-secondary"><i
                                    className="bi bi-arrow-clockwise me-1"></i>뒤로가기
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminMain;