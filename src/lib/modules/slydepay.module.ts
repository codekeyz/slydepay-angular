import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
        }
      ]
    };
  }
}
