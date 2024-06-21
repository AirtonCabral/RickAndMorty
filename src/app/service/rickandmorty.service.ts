import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';


const baseRef = 'https://rickandmortyapi.com/api';
const route = {
  search: (name: string) => `${baseRef}/character/?name=${name}`,
  searchAll: `${baseRef}/character`,
}

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  private charactersSignal: any = signal([]);
  private favoritesSignal: any = signal([]);
  private countFavoritesSignal: WritableSignal<number> = signal(0);

  readonly characters = this.charactersSignal.asReadonly();
  readonly favorited = this.favoritesSignal.asReadonly();
  readonly countFavorites = this.countFavoritesSignal.asReadonly();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFavoritesStorage();
  }

  getFavoritesStorage() {
    const favoritesStorage = sessionStorage.getItem("favorites");
    this.favoritesSignal.set(
      favoritesStorage ? JSON.parse(favoritesStorage) : []
    );
    this.countFavoritesSignal.set(favoritesStorage? JSON.parse(favoritesStorage).length : 0);
  }

  getCharacters(name: string) {
    let favortiesStorage = sessionStorage.getItem('favorites');
    const storageParse = favortiesStorage? JSON.parse(favortiesStorage) : [];
    
    this.http.get<any>(route.search(name)).subscribe((data) => {
      this.charactersSignal.set([]);
      const resultsWithFavorites = data.results.map((result: any) => ({
        ...result,
        favorites: false,
      }));
      ;
      console.log("results:", resultsWithFavorites);
      if (resultsWithFavorites.length > 0) {
        (storageParse || []).map((favorite: any) => {
          const index = resultsWithFavorites.findIndex(
            (character: any) => character.id === favorite.id
          );
          if (index !== -1) {
            resultsWithFavorites[index].favorites = true;
          }
        });
        this.charactersSignal.set(resultsWithFavorites);
      } else {
        this.charactersSignal.set([]);
      }
      return resultsWithFavorites;
    });
  }

  addFavorite(item: any) {
    this.charactersSignal.update((characters: any) => {
      const index = characters.findIndex(
        (character: any) => character.id === item.id
      );
      characters[index].favorites = true;
      ;
      console.log("characters:", characters);
      return characters;
    });
    this.favoritesSignal.update((favortie: any) => {
      const index = favortie.findIndex(
        (character: any) => character.id === item.id
      );
      if (index === -1) {
        favortie.push(item);
      }
      ;
      console.log("favorites:", favortie);
      sessionStorage.setItem('favorites', JSON.stringify(favortie));
      return favortie;
    });
    this.countFavoritesSignal.update((count: number) => count + 1);
  }

  removeFavorite(item: any) {
    this.charactersSignal.update((characters: any) => {
      const index = characters.findIndex(
        (character: any) => character.id === item.id
      );
      characters[index].favorites = false;
      ;
      console.log("characters:", characters);
      return characters;
    });
    this.favoritesSignal.update((favortie: any) => {
      const index = favortie.findIndex(
        (character: any) => character.id === item.id
      );
      favortie.splice(index, 1);
      ;
      sessionStorage.setItem('favorites', JSON.stringify(favortie));
      return favortie;
    });
    this.countFavoritesSignal.update((count: number) => count - 1);
  }
}
