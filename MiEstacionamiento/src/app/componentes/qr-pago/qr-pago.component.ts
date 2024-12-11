import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-pago',
  templateUrl: './qr-pago.component.html',
  styleUrls: ['./qr-pago.component.scss'],
})
export class QrPagoComponent {
  qrCodeData: string = '';
  generatedQRCode: string = '';

  generateQRCode() {
    if (this.qrCodeData.trim() === '') {
      alert('Por favor, ingresa un enlace para generar el QR.');
      return;
    }

    QRCode.toDataURL(this.qrCodeData, { width: 200 })
      .then((url) => {
        this.generatedQRCode = url;
      })
      .catch((err) => {
        console.error('Error al generar el QR:', err);
      });
  }

  downloadQRCode() {
    if (!this.generatedQRCode) {
      alert('Primero genera el QR.');
      return;
    }

    const link = document.createElement('a');
    link.href = this.generatedQRCode;
    link.download = 'qr-pago.png';
    link.click();
  }
}


