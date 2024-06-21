import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedMaterialModule } from "./shared/shared-material/shared-material.module";
import { HeaderComponent } from "./components/header/header.component";
import { RickandmortyService } from "./service/rickandmorty.service";
import { HomeRoutingModule } from "./pages/home/home.routing.module";
import { FavoritesModule } from "./pages/favorites/favorites.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,
    HomeRoutingModule,
    FavoritesModule
  ],
  providers: [RickandmortyService],
  exports: [HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
