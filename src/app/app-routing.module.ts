import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
},{
  path: 'shopping',
  component: ShoppingComponent
},{
  path: 'tip-calculator',
  component: TipCalculatorComponent
},{
  path:'**',
  redirectTo:'dashboard'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
