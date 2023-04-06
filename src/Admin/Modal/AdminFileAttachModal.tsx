import ModalPortal from "../../Layout/Modal/ModalPortal";
import Modal from 'react-bootstrap/Modal';
import '../../components/css/admin_dashboard.css';
import '../../components/css/admin_dashboard_rtl.css';

const AdminFileAttachModal = ({onClose, isOpen}: any) => {
    return (
        <ModalPortal>
            <Modal show={isOpen} size="xl">
            
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">청구서류 첨부</h5>
                            <button type="button" className="btn-close" onClick={onClose}
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">청구서류</label>
                                <input type="file" className="form-control" id="inputGroupFile01"/>
                            </div>

                            <div id="noDataDiv"
                                 className="col-md-12 text-center text-secondary card px-3 py-5 mt-3"
                                 style={{display: "none"}}>
                                <div id="" className="fs-2 mb-2">첨부하신 파일이 없습니다.</div>
                            </div>

                            <div id="file_wrapper" className="row">

                                <div className="col-4 mb-3">
                                    <div className="border card h-100 p-3">
                                        <div className="w-100 d-flex flex-wrap h-100 text-center">
                                            <div className="w-100 align-self-center">
                                                <img className="img-fluid" src="{{path}}"
                                                    // onError="this.onerror=null; this.src='{{error}}'"
                                                     alt="서류"/>
                                            </div>
                                            <div className="w-100 align-self-end">
                                                <div className="mt-2">파일이름</div>
                                                <div
                                                    className="text-secondary fs-7 mt-1">파일사이즈
                                                </div>
                                                <button id="download_{{idx}}" type="button"
                                                        className="btn btn-secondary mt-2">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="border card h-100 p-3">
                                        <div className="w-100 d-flex flex-wrap h-100 text-center">
                                            <div className="w-100 align-self-center">
                                                <img className="img-fluid" src="{{path}}"
                                                    // onError="this.onerror=null; this.src='{{error}}'"
                                                     alt="서류"/>
                                            </div>
                                            <div className="w-100 align-self-end">
                                                <div className="mt-2">파일이름</div>
                                                <div
                                                    className="text-secondary fs-7 mt-1">파일사이즈
                                                </div>
                                                <button id="download_{{idx}}" type="button"
                                                        className="btn btn-secondary mt-2">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="border card h-100 p-3">
                                        <div className="w-100 d-flex flex-wrap h-100 text-center">
                                            <div className="w-100 align-self-center">
                                                <img className="img-fluid" src="{{path}}"
                                                    // onError="this.onerror=null; this.src='{{error}}'"
                                                     alt="서류"/>
                                            </div>
                                            <div className="w-100 align-self-end">
                                                <div className="mt-2">파일이름</div>
                                                <div
                                                    className="text-secondary fs-7 mt-1">파일사이즈
                                                </div>
                                                <button id="download_{{idx}}" type="button"
                                                        className="btn btn-secondary mt-2">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="border card h-100 p-3">
                                        <div className="w-100 d-flex flex-wrap h-100 text-center">
                                            <div className="w-100 align-self-center">
                                                <img className="img-fluid" src="{{path}}"
                                                    // onError="this.onerror=null; this.src='{{error}}'"
                                                     alt="서류"/>
                                            </div>
                                            <div className="w-100 align-self-end">
                                                <div className="mt-2">파일이름</div>
                                                <div
                                                    className="text-secondary fs-7 mt-1">파일사이즈
                                                </div>
                                                <button id="download_{{idx}}" type="button"
                                                        className="btn btn-secondary mt-2">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="border card h-100 p-3">
                                        <div className="w-100 d-flex flex-wrap h-100 text-center">
                                            <div className="w-100 align-self-center">
                                                <img className="img-fluid" src="{{path}}"
                                                    // onError="this.onerror=null; this.src='{{error}}'"
                                                     alt="서류"/>
                                            </div>
                                            <div className="w-100 align-self-end">
                                                <div className="mt-2">파일이름</div>
                                                <div
                                                    className="text-secondary fs-7 mt-1">파일사이즈
                                                </div>
                                                <button id="download_{{idx}}" type="button"
                                                        className="btn btn-secondary mt-2">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="border card h-100 p-3">
                                        <div className="w-100 d-flex flex-wrap h-100 text-center">
                                            <div className="w-100 align-self-center">
                                                <img className="img-fluid" src="{{path}}"
                                                    // onError="this.onerror=null; this.src='{{error}}'"
                                                     alt="서류"/>
                                            </div>
                                            <div className="w-100 align-self-end">
                                                <div className="mt-2">파일이름</div>
                                                <div
                                                    className="text-secondary fs-7 mt-1">파일사이즈
                                                </div>
                                                <button id="download_{{idx}}" type="button"
                                                        className="btn btn-secondary mt-2">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>닫기
                            </button>
                            <button type="button" className="btn btn-primary">첨부하기</button>
                        </div>
            </Modal>
        </ModalPortal>
    );
}

export default AdminFileAttachModal;