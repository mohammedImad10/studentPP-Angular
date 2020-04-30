import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadge } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialsComponents = [
  MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
]

@NgModule({
  imports: [MaterialsComponents],
  exports: [MaterialsComponents]
})
export class MaterialsModule { }
