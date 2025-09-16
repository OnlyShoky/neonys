// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DemoPageComponent } from './features/pages/demo-page/demo-page.component';
import { MainLayoutComponent } from './features/pages/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',            // ruta principal
    component: MainLayoutComponent
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
