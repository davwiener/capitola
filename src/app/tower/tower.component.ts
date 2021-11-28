import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataType, TowerReducerState } from './ngrx/tower.reducer';
import { getCarriers, getLayers, save } from './ngrx/tower.actions';
import { selectCarriers, selectLayers, selectSaved } from './ngrx/tower.selector';
import { Observable } from 'rxjs';
import { CarriersData, LayerData } from './tower.config';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss']
})
export class TowerComponent implements OnInit {
  layersSelector$: Observable<DataType<LayerData[]>>
  carriers: CarriersData = {}
  canSave = false;
  savedOptions: Record<string, string> = {};
  carriersLoading: boolean;
  constructor(private store: Store<TowerReducerState>) { }

  ngOnInit(): void {
    this.store.dispatch(getLayers());
    this.store.dispatch(getCarriers());
    this.layersSelector$ = this.store.select(selectLayers);
    this.store.select(selectCarriers).pipe(untilDestroyed(this),).subscribe((carriers) =>{
      this.carriers = carriers.data
      this.carriersLoading = carriers.loading;
    });
  }

  optionSelected(key: string, option: string) {
    this.savedOptions[key] = option;
    if (Object.keys(this.savedOptions).length === 10) {
      this.canSave = true;
    }
  }

  onSave() {
    this.store.dispatch(save({savedOptions: this.savedOptions}));
    this.store.select(selectSaved).pipe(untilDestroyed(this),).subscribe((selectedLayers) =>{
      if (Object.keys(selectedLayers).length) {
        window.alert('save successfully');
      }
    });
  }
}
