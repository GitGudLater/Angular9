import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts/posts.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { BusketComponent } from './busket/busket/busket.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CatalogComponent,
    BusketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
