import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SlydepayConfig } from '../modules/slydepay.module';

@Injectable({
  providedIn: 'root'
})
export class SlydepayService {
  constructor(
    @Inject('config') private config: SlydepayConfig,
    private http: HttpClient
  ) {}
}
