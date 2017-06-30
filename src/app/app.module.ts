import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule,MdInputModule } from '@angular/material';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    NoopAnimationsModule,
    StoreModule.provideStore(rootReducer),
    MdInputModule,
    MdCardModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuoteService,QuoteActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
