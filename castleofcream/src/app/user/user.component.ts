import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['name', 'surname', 'age'];
  dataSource = new UserDataSource(this.firebaseService);

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {

  }

}

export class UserDataSource extends DataSource<any> {

  constructor(private fs: FirebaseService) {
    super();
  }

  connect() {
    return this.fs.getUsers();
  }

  disconnect() {

  }
}
