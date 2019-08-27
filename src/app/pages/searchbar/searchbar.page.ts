import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes()
      .subscribe(albums => {
        console.log(albums);
        this.albumes = albums;
    });
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

}
