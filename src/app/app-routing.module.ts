import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowerComponent } from './tower/tower.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: []
  },
  {
    path: 'tower',
    component: TowerComponent,
    loadChildren: () => import('./tower/tower.module').then(m => m.TowerModule),
  },
  {
    path: '**',
    redirectTo: ''
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
