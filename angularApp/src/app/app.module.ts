import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts/posts.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { BusketComponent } from './busket/busket/busket.component';
import { CatalogService } from './catalog/services/catalog.service';
import { HttpClient,HttpClientModule, HttpHandler, HttpEvent } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CatalogComponent,
    BusketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatalogService, HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
