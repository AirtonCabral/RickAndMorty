import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RickandmortyService } from 'src/app/service/rickandmorty.service';

@Component({
  selector: 'app-cardFav',
  templateUrl: './cardFav.component.html',
  styleUrls: ['./cardFav.component.sass']
})
export class CardFavComponent {
  @Input() item: any;
  @Output() markFavorite: EventEmitter<any> = new EventEmitter();

  constructor(
    private rickandmortyService: RickandmortyService
  ) { }

  addItem(item: any) {
    item.favorites = true;
    this.rickandmortyService.addFavorite(item);
    this.markFavorite.emit(item);
  }

  removeItem(item: any) {
    item.favorites = false;
    this.rickandmortyService.removeFavorite(item);
    this.markFavorite.emit(item);
  }
}
