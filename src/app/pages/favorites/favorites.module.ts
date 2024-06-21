import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites.routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { CardFavComponent } from './components/cardFav/cardFav.component';

@NgModule({
  declarations: [FavoritesComponent, CardFavComponent],
  imports: [CommonModule, SharedMaterialModule, FavoritesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FavoritesModule { }
