import { useNavigate } from "react-router-dom";
import useInterval from "../../components/util/useInterval";

function Header() {
    const navigate = useNavigate();
    const homeBtn = () => {
        navigate("/");
    }

    //onClick={() => homeBtn()}
    let timeElement = document.getElementById("timeto") as HTMLDivElement;
    const refreshTime = () => {
        let presentTime = new Date();
        let year = presentTime.getFullYear();
        let month = presentTime.getMonth() + 1;
        let date = presentTime.getDate();
        let day = presentTime.getDay();
        let week = ["일", "월", "화", "수", "목", "금", "토"];

        let hour = presentTime.getHours();
        let minutes = presentTime.getMinutes();

        timeElement.innerHTML = `${year}-${("00"+month.toString()).slice(-2)}-${("00"+date.toString()).slice(-2)}(${week[day]}) ${hour}:${minutes}`;
    }

    useInterval(() => {
        refreshTime();
    }, 1000);

    return (
        <header className="w-100 border-bottom p-2">
            <div className="d-flex justify-content-between align-items-center container text-secondary">
                <div><img src="/image/logo/bocare_white.svg" className="d-block w-75" alt="..."/></div>
                <div id="timeto">2023-02-16(목) 14:24</div>
                <div>문용성 관리자 <button className="btn btn-outline-primary rounded-circle" onClick={() => homeBtn()}>홈</button></div>
            </div>
        </header>
    );
}

export default Header;