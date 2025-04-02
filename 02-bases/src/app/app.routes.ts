import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { HanniPageComponent } from './pages/hanni/hanni-page.component';
import { HanniNjzPageComponent } from './pages/hanni-njz/hanni-njz-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'hanni',
    component: HanniPageComponent,
  },
  {
    path: 'hanni-njz',
    component: HanniNjzPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
