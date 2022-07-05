import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { SideBarComponent } from './modules/layout/side-bar/side-bar.component';
import { PaginationComponent } from './modules/pages/pagination/pagination.component';
import { LazyLaodDataComponent } from './modules/pages/lazy-laod-data/lazy-laod-data.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { HomeComponent } from './modules/pages/home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from "@angular/forms";
import { SearchPipe } from 'src/shared/pipes/search.pipe.ts';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PaginationComponent,
    LazyLaodDataComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
