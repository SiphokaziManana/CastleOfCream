import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';


@Injectable()
export class FirebaseService {

  ref = firebase.firestore().collection('users');

  constructor(private db: AngularFirestore) { }

  getUsers(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          users.push({
            key: doc.id,
            name: data.name,
            surname: data.surname,
            age: data.age
          });
        });
        observer.next(users);
      });
    });
  }

  getUser(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        const data = doc.data();
        observer.next({
          key: doc.id,
          name: data.name,
          surname: data.surname,
          age: data.age
        });
      });
    });
  }

  postUser(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateUser(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteUser(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }

  /*createUser(value) {
    return this.db.collection('users').add({
      name: value.name,
      surname: value.surname,
      age: '35'
    });
  }

  getUsers() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/people').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }*/
}
