import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  results; //add the public property here

  findCharacter(name){
    //console.log('finding ' + name);
    //  this.http.get('http://swapi.co/api/people/?search=' + name)
    // .toPromise()
    // .then(response => console.log(response.json()));
	this.http.get('http://swapi.co/api/people/?search=' + name)
        .toPromise()
        .then(response => this.results = response.json().results); //set it here    
  }	

  constructor(public navCtrl: NavController, private http: Http) {

  }

}
