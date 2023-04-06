import { useNavigate } from "react-router-dom";
import useInterval from "../../components/util/useInterval";

function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/kiosk_insurance_admin/">보케어 키오스크</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" id="insurance_admin_logout" href="#">로그아웃</a>
                </div>
            </div>
        </header>
    );
}

export default AdminHeader;