import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { QuoteBookComponent } from './quote-book/quote-book.component';
import { QuoteService } from './quote-book/quote-service';
import { QuoteActions } from './quote-book/quote-actions';
import { rootReducer } from './quote-book/quote-reducer';
import {StoreModule} from "@ngrx/store";


@NgModule({
  declarations: [
    AppComponent,
    QuoteBookComponent
  ],
  imports: [
    StoreModule.provideStore(rootReducer),
    MdCardModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuoteService,QuoteActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
