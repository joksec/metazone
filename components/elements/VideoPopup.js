import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ text, cls }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a onClick={() => setOpen(true)} className={`popup-video ${cls && cls}`} data-animation="fadeInRight" data-delay=".6s">{text && text}<i className="fas fa-play pulse" /></a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="bixR-KIJKYM" onClose={() => setOpen(false)} />
        </>
    )
}