import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  /*{ path: 'feature1', component: Feature1Component }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }