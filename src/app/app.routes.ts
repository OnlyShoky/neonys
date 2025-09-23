// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DemoPageComponent } from './features/pages/demo-page/demo-page.component';
import { MainLayoutComponent } from './features/pages/main-layout/main-layout.component';
import { TermsOfServiceComponent } from './features/pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './features/pages/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  {
    path: '',            // ruta principal
    component: MainLayoutComponent
  },
    {
    path: 'terms-of-service',            // ruta principal
    component: TermsOfServiceComponent
  },
      {
    path: 'privacy-policy',            // ruta principal
    component: PrivacyPolicyComponent
  },
  {
    path: 'demo',        // ruta de demo
    component: DemoPageComponent
  },
  {
    path: '**',          // fallback por si escriben cualquier otra ruta
    redirectTo: ''
  }
];
