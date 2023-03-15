import ModalPortal from "../../Layout/Modal/ModalPortal";
import {Modal} from "react-bootstrap";
import '../../components/css/common.css';

function SendTypeModal({ onClose, isOpen }: any){
    return (
        <ModalPortal>
            <Modal show={isOpen} size="xl">
               
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <div className="modal-title fs-1" id="picture_phoneLabel"><i
                                className="bi bi-image me-2"></i>사진 보내실 분 연락처를
                                기입해주세요.
                            </div>
                        </div>
                        <div className="modal-body text-center fs-2 p-4 py-6">
                            <div className="mb-5">연락처 기입 후<br/> 전송 버튼 클릭 하시면<br/><span className="text-pink"
                                                                              style={{textDecoration:"underline"}}>문자메시지</span>를
                                확인해주세요.
                            </div>
                            <div className="d-flex align-items-center">
                                <input type="tel" className="form-control py-6" name="phone_input write-input" id="phone_num_first"
                                       maxLength={3} placeholder="010"/>
                                    <div className="px-2">-</div>
                                    <input type="tel" className="form-control py-6" name="phone_input write-input"
                                           id="phone_num_second"
                                           maxLength={4} placeholder="1234"/>
                                        <div className="px-2">-</div>
                                        <input type="tel" className="form-control py-6" name="phone_input write-input"
                                               id="phone_num_third"
                                               maxLength={4} placeholder="5678"/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="d-flex w-100">
                                <button type="button" className="btn btn-secondary py-5 fs-4 me-4 w-100"
                                        data-bs-dismiss="modal" onClick={onClose}>닫기
                                </button>
                                <button type="button" className="btn btn-pink py-5 fs-4 w-100"
                                        data-bs-dismiss="modal" onClick={onClose}>전송
                                </button>
                            </div>
                        </div>
                    </div>
             
            </Modal>
        </ModalPortal>
    );
}

export default SendTypeModal;