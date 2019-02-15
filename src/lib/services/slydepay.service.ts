import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SlydepayConfig } from '../modules/slydepay.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlydepayService {
  constructor(
    @Inject('config') private config: SlydepayConfig,
    private http: HttpClient
  ) {}
  private baseUrl = 'https://app.slydepay.com.gh/api/merchant';

  createAn;

  getlistOptions(): Observable<any> {
    return this.http.post(`${this.baseUrl}/invoice/payoptions`, this.config);
  }

  createInvoice(options, sendInvoice: boolean = false): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/invoice/create`,
      (options.sendInvoice = sendInvoice)
    );
  }

  sendInvoice(options): Observable<any> {
    return this.http.post(`${this.baseUrl}/invoice/send`, options);
  }

  checkPaymentStatus(options): Observable<any> {
    return this.http.post(`${this.baseUrl}/invoice/checkstatus`, options);
  }

  confirmTransaction(options): Observable<any> {
    return this.http.post(`${this.baseUrl}/transaction/confirm`, options);
  }

  cancelTransaction(options): Observable<any> {
    return this.http.post(`${this.baseUrl}/transaction/confirm`, options);
  }
}
