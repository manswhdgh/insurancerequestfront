// src/components/ModalPortal.ts
import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
    children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
    const modalRootElement = document.getElementById("modal-root") as HTMLElement;

    return ReactDom.createPortal(children, modalRootElement);
};

export default ModalPortal;