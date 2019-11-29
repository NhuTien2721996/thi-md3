import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AwesomeComponent} from './awesome/awesome.component';
import {RouterModule, Routes} from '@angular/router';
import { AwesomeAddComponent } from './awesome-add/awesome-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';

const routes: Routes = [
  {path: '', component: AwesomeComponent},
  {path: 'awesome/create', component: AwesomeAddComponent},
  {path: 'awesome/:id/edit', component: AwesomeEditComponent}
];


@NgModule({
  declarations: [AwesomeComponent, AwesomeAddComponent, AwesomeEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class AwesomesModule {
}
