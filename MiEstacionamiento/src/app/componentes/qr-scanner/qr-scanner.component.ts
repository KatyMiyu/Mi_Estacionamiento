import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent {
  scannedData: string | null = null;

  constructor() {}

  async scanQrCode() {
    // Solicitar permisos y preparar el escáner
    const permission = await BarcodeScanner.checkPermission({ force: true });

    if (!permission.granted) {
      alert('Permiso denegado para usar el escáner de QR.');
      return;
    }

    // Iniciar el escaneo del código QR
    const result = await BarcodeScanner.startScan();

    // Comprobar si se escaneó correctamente
    if (result.hasContent) {
      this.scannedData = result.content; // Guardar el contenido escaneado
      console.log('Contenido escaneado:', this.scannedData);

      // Verificar si el contenido es un enlace
      if (this.isValidUrl(this.scannedData)) {
        window.open(this.scannedData, '_blank'); // Abre el enlace en una nueva pestaña
      } else {
        alert(`Código escaneado: ${this.scannedData}`);
      }
    } else {
      alert('No se detectó contenido en el QR.');
    }
  }

  isValidUrl(url: string): boolean {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // Protocolo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // Dirección IP (opcional)
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Puerto y ruta
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Cadena de consulta
      '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return !!pattern.test(url);
  }
}

