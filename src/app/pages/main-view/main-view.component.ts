import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board=new Board('Test Board',[
    new Column('Ideas',[
      "some random idea",
      "this isanother random idea",
      "builid an awesome aplication"
    ]),
    new Column('Research',[
      "lorem ipsum",
      "foo",
      "this was in the 'Research' column"
    ]),
    new Column('Todo',[
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column('Done',[
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
       ]),
  ]);
  ngOnInit(): void {
  }  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
