import ModalWrapper from "./ModalWrapper";
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

export default function AlertModal({ children, title }) {
    return (
        <ModalWrapper title={title}>
            <ModalHeader title={title} />
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter/>
        </ModalWrapper>
    )
}