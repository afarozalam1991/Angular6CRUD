import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules=[
  MatToolbarModule,  BrowserAnimationsModule,
  BsDatepickerModule.forRoot()
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModuleModule { }
