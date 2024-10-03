import QrCodeImg from "./QrCodeImg";
import QrCodeText from "./QrCodeText";

export default function BoxQRCode () {
    return (
        <div className="QrCodeBox">
            <QrCodeImg />
            <QrCodeText />
        </div>
    )
}