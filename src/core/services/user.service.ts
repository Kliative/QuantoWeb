import { Injectable } from '@angular/core';
import { UserSignUpData } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCol: AngularFirestoreCollection<UserSignUpData>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {

    this.userCol = afs.collection<UserSignUpData>('users');

  }

  loadUserData(): AngularFirestoreCollection<UserSignUpData> {

    // const userRef: AngularFirestoreDocument<UserSignUpData> = this.afs.doc(
    //   `users/${user.uid}`
    // );

    // userRef.collection<UserSignUpData>(userRef);

    return this.afs.collection<UserSignUpData>('users');
  }

  // updateUserData(user: UserSignUpData) {
  //   const userRef: AngularFirestoreDocument<UserSignUpData> = this.afs.doc(
  //     `users/${user.uid}`
  //   );


  //   const data: UserSignUpData = {
  //     uid: user.uid,
  //     email: user.email || null,
  //     roles: {
  //       subscriber: user.roles.subscriber || null,
  //       editor: user.roles.subscriber || null,
  //       admin: user.roles.subscriber || null,
  //       //
  //       doctor: user.roles.subscriber || null,
  //       patient: user.roles.subscriber || null,
  //       physio: user.roles.subscriber || null,
  //       student: user.roles.subscriber || null,
  //     },
  //     displayName: user.displayName || 'nameless user',
  //     photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
  //   };

  //   return userRef.set(data);
  // }
}
