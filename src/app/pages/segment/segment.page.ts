import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSegmentButton } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: false}) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    if (event.detail.value === 'todos') {
      this.publisher = '';
      return;
    }
    this.publisher = event.detail.value;
  }

}
