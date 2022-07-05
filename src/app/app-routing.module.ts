import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { LazyLaodDataComponent } from './modules/pages/lazy-laod-data/lazy-laod-data.component'
import { PaginationComponent } from './modules/pages/pagination/pagination.component'
const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'', component:LayoutComponent,children:[
      {
        path:'home', component:HomeComponent
      },
      {
        path:'lazyload-data', component:LazyLaodDataComponent
      },
      {
        path:'pagination-data' ,component:PaginationComponent
      }
    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
