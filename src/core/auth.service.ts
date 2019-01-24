import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { firebase } from '@firebase/app';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { NotifyService } from './notify.service';

import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { UserSignUpData } from './models/user.model';
import { hashCode } from '../shared/util/services/hasCode.service';
import { Guid } from '../shared/util/services/guid.service';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notify: NotifyService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
      // tap(user => localStorage.setItem('user', JSON.stringify(user))),
      // startWith(JSON.parse(localStorage.getItem('user')))
    );
  }

  get authenticated() {
    return this.afAuth.authState;
  }

  // Returns current user
  get currentUser(): any {
    return this.authenticated ? this.afAuth.authState : null;
  }

  ////// OAuth Methods /////

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth
      .signInAnonymously()
      .then(credential => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  //// Email/Password Auth ////

  emailSignUp(userSignUpData: UserSignUpData) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(userSignUpData.email, userSignUpData.password)
      .then(credential => {
        // this.notify.update('Welcome new user!', 'success');
        console.warn('logged in');
        this.router.navigate(['/doctor']);
        return this.updateUserData(credential.user, userSignUpData); // if using firestore
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        // this.notify.update('Welcome back!', 'success');
        console.warn('logged in');
        this.router.navigate(['/doctor']);
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => this.notify.update('Password update email sent', 'info'))
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/auth/login']);
      console.warn('logged out');
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User, userSignUpData?: UserSignUpData) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    if (userSignUpData) {
      const userRole: UserSignUpData = {
        uid: user.uid,
        email: userSignUpData.email,
        password: `${hashCode(userSignUpData.password)}`,
        displayName: userSignUpData.displayName || 'nameless user',
        photoURL: userSignUpData.photoURL || 'https://goo.gl/Fz9nrQ',
        personalDetails: {
          firstname: userSignUpData.personalDetails.firstname,
          surname: userSignUpData.personalDetails.surname
        },
        medicalDetails: {
          practiseName: userSignUpData.medicalDetails.practiseName,
          address: userSignUpData.medicalDetails.address,
          city: userSignUpData.medicalDetails.city,
          country: userSignUpData.medicalDetails.country,
          practiceId: userSignUpData.medicalDetails.practiceId || Guid.newGuid()
        },
        roles: {
          doctor: userSignUpData.roles.doctor || false,
          patient: userSignUpData.roles.patient || false,
          physio: userSignUpData.roles.physio || false,
          student: userSignUpData.roles.student || false,
          admin: userSignUpData.roles.admin || false,
          userVerifried: userSignUpData.roles.userVerifried || false,
          practiceVerified: userSignUpData.roles.practiceVerified || false,
        }
      };
      return userRef.set(userRole);
    } else {
      const normalData: User = {
        uid: user.uid,
        email: user.email || null,
        displayName: user.displayName || 'nameless user',
        photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
      };
      return userRef.set(normalData);
    }



  }

  private checkAuthorization(user: UserSignUpData, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }

    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
      return false;
    }
  }
  // Roles
  canRead(user: UserSignUpData): boolean {
    const allowed = ['admin', 'editor', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: UserSignUpData): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }
}

