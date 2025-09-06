import { QRCodeCanvas } from "qrcode.react";

interface QrcodeProps {
  value: string;
}

function Qrcode({ value }: QrcodeProps) {
  return (
    <div className="bg-[hsl(220,15%,55%)] p-4 rounded-xl flex justify-center" aria-label="QR code linking to frontend mentor">
      <QRCodeCanvas value={value} size={200} />
    </div>
  );
}

export default Qrcode;
