import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  constructor(private _reviewService: ReviewService ) { }

  ngOnInit() {
    this.getRewiews();
  }
  getRewiews(){
    this._reviewService.getReviews().then( reviews=> this.reviews = reviews);
  }

}
