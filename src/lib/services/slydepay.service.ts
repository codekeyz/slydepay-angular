import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SlydepayService {

  constructor(@Inject('config') private config: Config,
  private http: HttpClient) { }
}
