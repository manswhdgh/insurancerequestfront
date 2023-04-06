import '../../components/css/kiosk_common.css';
import ModalPortal from "../../Layout/Modal/ModalPortal";
import Modal from 'react-bootstrap/Modal';

const CreditLogModal = ({ onClose, isOpen }: any) => {
    return(
        <ModalPortal>
            <Modal show={isOpen} size="xl">
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <div className="modal-title fs-2" id="list03Label">안내, 청구 이력 등의 관리를 위한 제3자 정보 제공(선택 동의)
                            </div>
                        </div>
                        <div className="modal-body text-start fs-4 p-4">
                            1) 이름, 계정, 비밀번호 : 서비스이용에 따른 민원 사항의 처리를 위한 본인식별, 신용평가기관을 통한 실명확인, 중복가입확인, 부정 이용 방지를 위하여
                            사용됩니다.<br/>
                            2) 이메일, 전화번호, 주소 : 고지사항 전달, 본인 의사확인, 불만처리 등 의사소통 경로의 확보, 새로운 서비스나 신상품, 이벤트 정보 등 최신 정보안내,
                            경품발송 등을 위하여 사용됩니다.<br/>
                            3) 은행계좌정보, 신용카드정보, 휴대폰번호, 포인트정보 : 유료 서비스 이용에 대한 정확한 과금과 결제 및 본인확인 등을 위하여 사용됩니다.<br/>
                            4) 이용자의 IP주소, 방문 일시 : 불량회원의 부정 이용방지와 비인가 사용방지<br/>
                            5) 그 외 선택항목 : 개인맞춤서비스를 제공하기 위한 자료로 사용됩니다.<br/><br/>
                            수집하는 개인정보의 항목<br/>
                            1) 필수항목 : 이메일, 이름, 연락처<br/>
                            2) 자동수집항목 : IP Address, 서비스 이용기록 등<br/><br/>
                            개인정보의 보유 및 이용기간<br/>
                            1) 회원가입정보의 경우, 회원가입을 탈퇴하거나 회원에서 제명된 경우 등 일정한 사전에 보유목적, 기간 및 보유하는 개인정보 항목을 명시하여 동의를 구합니다.<br/>
                            2) 계약 또는 청약철회 등에 관한 기록 : 5년<br/>
                            3) 대금결제 및 재화등의 공급에 관한 기록 : 5년<br/>
                            4) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br/>
                            5) 재가입 방지를 위한 가입정보 기록: 90일<br/>
                            6) 자료 등록 및 판매에 관한 기록: 180일<br/><br/>
                            -부칙-<br/>
                            기존 개인정보보호정책은 개인정보처리방침으로 개정합니다.<br/>
                            현 개인정보처리방침의 수정, 변경이 있을 시 최소 7일 이전에 사이트 내 공지를 통하여 고지할 것입니다.<br/>
                            개인정보처리방침 시행일자 : 2019년 01월 01일<br/>
                            이 약관은 2019년 01월 01일부터 시행하며 종전의 약관은 이 약관으로 대체합니다.<br/>
                        </div>
                        <div className="modal-footer w-100">
                            <button type="button" className="btn btn-secondary py-3 w-100 fs-4"
                                    onClick={onClose}>확인
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </ModalPortal>
    );
}

export default CreditLogModal;