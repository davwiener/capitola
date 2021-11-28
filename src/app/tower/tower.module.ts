import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { TowerComponent } from './tower.component';
import { LayerComponent } from './layer/layer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { towerReducer } from './ngrx/tower.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TowerEffects } from './ngrx/tower.effect';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TowerComponent,
    LayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    StoreModule.forFeature({ name: 'tower', reducer: towerReducer }),
    MatProgressSpinnerModule,
    EffectsModule.forFeature([TowerEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TowerModule { }
