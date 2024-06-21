import { Component, computed } from '@angular/core';
import { RickandmortyService } from 'src/app/service/rickandmorty.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent {
  listFavorites = computed(() => this.rickandmortyService.favorited());

  constructor(
    public rickandmortyService: RickandmortyService
  ) {}

  ngOnInit () {
    
  }
}
