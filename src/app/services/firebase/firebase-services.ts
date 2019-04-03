import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UserProfile } from '../../common/models/user-profile';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {

  }

  getpinca() {
    firebase.firestore().collection('users').doc('priyanka.sonone@capco.com').get().then((res) => {
      console.log(res.data());
    })
  }

  updateProfile(profile: UserProfile) {
    console.log('firebase called')
      firebase.firestore().collection('users').doc(profile.email).set({
        id: profile.id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        contact: profile.contact,
        dob: profile.dob,
        learnerRole: profile.learnerRole,
        adminRole: profile.adminRole,
        trainerRole: profile.trainerRole,
        bio: profile.bio,
        skill: profile.skill
      }).then(res=>{
        console.log('data added success');
      });

  }
}
