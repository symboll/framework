import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Gender } from '../enum';
import { User } from '../interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @ViewChild('nameInput') nameInput: any
  public isModify: boolean = false

  @Input() item: User = {
    name: '',
    age: 0,
    gender: Gender.MALE,
    education: []
  }
  @Output() itemChange: EventEmitter<any> = new EventEmitter()


  public modifyName () {
    this.isModify = true
    setTimeout(() => {
      this.nameInput.nativeElement.focus()
    });
  }
  public onInputBlur () {
    this.isModify = false
    this.itemChange.emit(this.item)
  }
}
