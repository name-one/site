import { Component, OnInit, Input } from '@angular/core';
import { RevImgService } from '../rev-img.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-rview-image',
  templateUrl: './rview-image.component.html',
  styleUrls: ['./rview-image.component.scss']
})
export class RviewImageComponent implements OnInit {
  @Input()
  src: string;
  constructor(private _revImgService: RevImgService ) { }

  ngOnInit() {
    this.getImage();
  }
  getImage(){
      this.src = this._revImgService.getImg(this.src);
  }
}
