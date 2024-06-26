import { Component, computed, effect } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { RickandmortyService } from'src/app/service/rickandmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  page: number = 0;
  isLoading: boolean = false;
  hasError: boolean =  false;

  searchInput = new Subject<string>();
  listCharacters = computed(() => this.rickandmortyService.characters() || []);

  constructor(
    public rickandmortyService: RickandmortyService
  ) { 
    this.searchInput
      .pipe(debounceTime(500))
      .subscribe((searchTerm: string) => {
        this.onSearch(searchTerm);
      });
  }

  ngOnInit(): void {
    this.searchInput.next('');
  }

  onSearchInputChange(searchTerm: string) {
    this.searchInput.next(searchTerm);
  }

  onSearch(name: string) {
    
    this.rickandmortyService.getCharacters(name)
  }

  ngOnDestroy() {
    this.searchInput.complete();
  }
}
