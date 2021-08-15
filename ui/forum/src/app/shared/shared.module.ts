import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { HeaderComponent } from "./component/header/header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [
      CoreModule,
      CommonModule
    ],
    exports: [
        HeaderComponent,
        CommonModule
    ]
  })
  export class SharedModule { }