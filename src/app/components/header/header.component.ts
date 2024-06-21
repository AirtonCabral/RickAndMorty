import { Component, computed } from '@angular/core';
import { RickandmortyService } from 'src/app/service/rickandmorty.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  count = computed(() => this.rickandmortyService.countFavorites() || 0);
  
  constructor(
    private rickandmortyService: RickandmortyService
  ) { }

  ngOnInit() {
    this.rickandmortyService.getFavoritesStorage();
  }
}
