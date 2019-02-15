import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlydePayConfigInterceptor } from '../helpers/slydepay.interceptor';

export interface SlydepayConfig {
  emailOrMobileNumber: string;
  merchantKey: string;
}

@NgModule({
  declarations: [],
  imports: [HttpClientModule]
})
export class SlydepayModule {
  static forRoot(config: SlydepayConfig): ModuleWithProviders {
    return {
      ngModule: SlydepayModule,
      providers: [
        {
          provide: 'config',
          useValue: config
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SlydePayConfigInterceptor,
          multi: true
        }
      ]
    };
  }
}
