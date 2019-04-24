import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// HttpClientModeule and PipeSort are being imported to fetch data from json and to use predefined currency respectively
import { HttpClientModule } from '@angular/common/http';
import { PipeSortPipe } from './pipe-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Adding httpClient to the imports
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
