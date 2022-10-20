import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';

import { InputComponent } from 'src/app/components/input/input.component';  // own components must import here!!!
import { OutputComponent } from 'src/app/components/output/output.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule
    
  ],
  declarations: [
    TestPage,
    InputComponent,
    OutputComponent       // own components declare here!!!
  ]
})
export class TestPageModule {}
