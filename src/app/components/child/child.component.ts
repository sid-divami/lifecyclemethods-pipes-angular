import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() userName = 'lails';

  /*ngOnInit occurs only once.
   */
  ngOnInit() {
    alert('BOOOM ngOnINIT()');
  }
  /*
    ngOnchanges will trigger whenever there is a change in 
  the component level. 
  Here when the button is clicked the ngOnchanges method gets
  Triggered. 
  */

  ngOnChanges(changes: SimpleChanges) {
    console.log(Object.keys(changes));
    console.log(Object.keys(changes['userName']));
    console.log(changes.userName.previousValue);
    console.log(changes['userName'].currentValue);

    // let { userName } = changes;
  }
}
