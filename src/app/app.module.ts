import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotifyComponent } from './components/quotify/quotify.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotifyComponent,
    QuoteFormComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
