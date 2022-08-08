import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogService } from './services/catalog/catalog.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BucketService } from './services/bucket/bucket.service';
import { BucketComponent } from './routers/components/bucket/bucket.component';
import { CatalogComponent } from './routers/components/catalog/catalog.component';
import { RoublesPipe } from './pipes/roubles-currency.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BucketComponent,
    RoublesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CatalogService, HttpClient, HttpClientModule, BucketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
