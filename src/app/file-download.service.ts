import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor() { }

  downloadPdfFromBase64(filename: string, base64String: string) {
    const binaryData = atob(base64String);
    const length = binaryData.length;
    const uint8Array = new Uint8Array(length);

    for(let i = 0; i < length; ++i) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([uint8Array], {type: 'application/pdf'});
    //console.log(blob);

    const url = URL.createObjectURL(blob);
    //console.log("URL: " + url);

    // Create an anchor element to trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    // Trigger the download
    a.click();

    // Clean up by revoking the Blob URL
    URL.revokeObjectURL(url);
  }
}
