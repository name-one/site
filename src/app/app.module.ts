import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewService } from './review.service';
import { RviewImageComponent } from './rview-image/rview-image.component';
import { RevImgService } from './rev-img.service';
import { FormComponent } from './form/form.component';
import { SenMessageService } from './sen-message.service';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    RviewImageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ReviewService,
    RevImgService,
    SenMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
