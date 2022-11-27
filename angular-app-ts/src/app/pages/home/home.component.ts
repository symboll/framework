import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

import { Gender } from './enum';
import { User } from './interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor (
    private api: ApiService
  ) {}

  public userList: User[] =[
    {
      name: 'zhangsan',
      age: 18,
      gender: Gender.MALE,
      education: []
    },
    {
      name: 'lisi',
      age: 18,
      gender: Gender.MALE,
      education: []
    }
  ]

  ngOnInit () {
    this.getUserList()
  }

  public getUserList () {
    this.api.getConfig('user').subscribe({
      next(value) {
        console.log('value', value)
      },
      error(err) {
        console.log('err', err)
      }
    })
  }
}
