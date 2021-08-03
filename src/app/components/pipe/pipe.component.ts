import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  now = new Date();

  text = 'howdy-mj';

  constructor() {}

  ngOnInit(): void {}
}
