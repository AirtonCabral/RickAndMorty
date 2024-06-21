import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./home.component";
import { SharedMaterialModule } from "src/app/shared/shared-material/shared-material.module";
import { CardComponent } from "./components/card/card.component";
@NgModule({
  declarations: [HomeComponent,CardComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
