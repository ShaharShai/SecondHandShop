import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { routing } from './app.routing';
import { AddNewComponent } from './components/add-new/add-new.component';
import { FormsModule } from '@angular/forms';
import { ShekelToDollarPipe } from './pipes/shekel-to-dollar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AddNewComponent,
    ShekelToDollarPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
