import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', { static: true }) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getUsers().subscribe(console.log);
    this.usuarios = this.dataService.getUsers();
  }

  favorite( user ) {
    this.lista.closeSlidingItems();
  }

  share( user ) {
    this.lista.closeSlidingItems();
  }

  borrar( user ) {
    this.lista.closeSlidingItems();
  }

}
