import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentBlocksComponent } from './pages/content-blocks/content-blocks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultCardsComponent } from './pages/default-cards/default-cards.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PricingTablesComponent } from './pages/pricing-tables/pricing-tables.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'defaulcards',
    component: DefaultCardsComponent
  },
  {
    path: 'pricingtables',
    component: PricingTablesComponent
  },
  {
    path: 'contentblocks',
    component: ContentBlocksComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
