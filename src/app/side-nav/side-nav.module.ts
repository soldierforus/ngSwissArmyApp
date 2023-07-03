import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatDividerModule, MatListModule],
  declarations: [SideNavComponent],
  exports: [SideNavComponent]
})
export class SideNavModule { 
  
}
