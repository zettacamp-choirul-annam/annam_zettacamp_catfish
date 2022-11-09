import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './promo.component';
import { PromoRoutingModule } from './promo-routing.module';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
      declarations: [
            PromoComponent,
            CardComponent,
            ListComponent,
            DialogComponent
      ],
      imports: [
            CommonModule,
            PromoRoutingModule,
            SharedModule,
            ReactiveFormsModule
      ],
      exports: [
            PromoComponent
      ]
})
export class PromoModule { }
