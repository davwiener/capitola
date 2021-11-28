import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  @Input() name = '';
  @Input() description = '';
  @Input() options: string[] = [];
  @Input() value: string = '';
  @Input() loading: boolean;
  @Output() emittOption = new EventEmitter<string>()
  selectedOption: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  selectOption() {
    this.emittOption.next(this.selectedOption);
  }

}
