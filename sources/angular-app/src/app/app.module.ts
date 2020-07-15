import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SortByPipe } from './sort-by.pipe';
import { SliderComponent } from './slider/slider.component';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { SidebarBiosComponent } from './sidebar-bios/sidebar-bios.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SortByPipe,
    SliderComponent,
    DynamicRouteComponent,
    PostCardComponent,
    SidebarSearchComponent,
    SearchFormComponent,
    SidebarBiosComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }