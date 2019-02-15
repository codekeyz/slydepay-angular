import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SlydepayConfig } from '../modules/slydepay.module';
import { Observable } from 'rxjs';
import {
  SlydepayResponse,
  ListPayOptionsResult,
  CreateInvoiceResult,
  Invoice,
  SendInvoice,
  CheckPaymentStatus,
  Transaction
} from '../helpers/slydepay.models';

@Injectable({
  providedIn: 'root'
})
export class SlydepayService {
  constructor(
    @Inject('config') private config: SlydepayConfig,
    private http: HttpClient
  ) {}
  private baseUrl = 'https://app.slydepay.com.gh/api/merchant';

  getlistOptions(): Observable<SlydepayResponse<ListPayOptionsResult>> {
    return this.http.post<SlydepayResponse<ListPayOptionsResult>>(
      `${this.baseUrl}/invoice/payoptions`,
      this.config
    );
  }

  createInvoice(
    invoice: Invoice
  ): Observable<SlydepayResponse<CreateInvoiceResult>> {
    return this.http.post<SlydepayResponse<CreateInvoiceResult>>(
      `${this.baseUrl}/invoice/create`,
      invoice
    );
  }

  createInvoiceAndSend(
    invoice: SendInvoice
  ): Observable<SlydepayResponse<CreateInvoiceResult>> {
    return this.http.post<SlydepayResponse<CreateInvoiceResult>>(
      `${this.baseUrl}/invoice/create`,
      invoice
    );
  }

  sendInvoice(options: SendInvoice): Observable<any> {
    return this.http.post(`${this.baseUrl}/invoice/send`, options);
  }

  checkPaymentStatus(
    options: CheckPaymentStatus
  ): Observable<SlydepayResponse<string>> {
    return this.http.post<SlydepayResponse<string>>(
      `${this.baseUrl}/invoice/checkstatus`,
      options
    );
  }

  confirmTransaction(
    options: Transaction
  ): Observable<SlydepayResponse<string>> {
    return this.http.post<SlydepayResponse<string>>(
      `${this.baseUrl}/transaction/confirm`,
      options
    );
  }

  cancelTransaction(
    options: Transaction
  ): Observable<SlydepayResponse<string>> {
    return this.http.post<SlydepayResponse<string>>(
      `${this.baseUrl}/transaction/confirm`,
      options
    );
  }
}
