import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent implements OnInit {
@Input() sentence:string;
  constructor() { }

  ngOnInit() {}

}
