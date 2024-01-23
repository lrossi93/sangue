import { Injectable } from '@angular/core';
import { User } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private venues: User[] = [];
  constructor() { }
  
  setVenues(venues: User[]) {
    this.venues = venues;
    //console.log("setting venues:");
    console.log(this.venues);
  }

  getVenues(): User[] {
    //console.log("Venues number: " + this.venues.length)
    return this.venues;
  }

  printVenues() {
    console.log("venues:");
    console.log(this.venues);
  }
}
