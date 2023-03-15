
function InsCard({insCompanyInfo} : any) {
    const handleImageError = (e:any) => {
        e.target.Error = null;
        e.target.src = `/image/company/${insCompanyInfo.name}.png`;
    }

    return(
        <div className={`${insCompanyInfo.display} mb-3`}>
            <div className="border border-5 rounded-3 p-4 me-3 w-25 cursor">
                <img src={`/image/company/${insCompanyInfo.name}.svg`} onError={handleImageError}
                     alt={insCompanyInfo.name} className="d-block w-100"/>
                <div className="fs-4 mt-2">{insCompanyInfo.name}</div>
            </div>
            <div className="w-75 text-start">
                <div className="d-flex align-items-end fs-4 h-50">[<span className="fw-bold">{insCompanyInfo.name} 고객센터 : {insCompanyInfo.number}</span>]
                    가상팩스 번호 발급 후 아래에 해당 번호를 기입해주세요.
                </div>
                <input id="virtualFaxNumber" name="virtualFaxNumber" className="form-control py-3 h-50"
                       type="tel"
                       placeholder="'-'없이 입력"/>
            </div>
        </div>
    );
}

export default InsCard;