import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Observer, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'AngularObservables';
  constructor(private dataService : DataService){

  }
  // Using constructor
 /*  myObservable = new Observable((observer)=>{
    console.log("Observable starts");
    setTimeout(()=>{observer.next("1");},1000);
    setTimeout(()=>{observer.next("2");},2000);
    setTimeout(()=>{observer.next("3");},3000);
    setTimeout(()=>{observer.error(new Error(
      "Something went wrong! Please try again later"));
  },3000);
  // the rest will not get emitted nor the complete signal because we have an error
    setTimeout(()=>{observer.next("4");},4000);
    setTimeout(()=>{observer.next("5");},5000);
    // no value will e emitted after the complete signal
    setTimeout(()=>{observer.complete();},3000);
  }); */
  //Using Create method
/*   myObservable = Observable.create((observer:Observer<any>)=>{
    setTimeout(()=>{observer.next("A");},1000);
    setTimeout(()=>{observer.next("B");},2000);
    setTimeout(()=>{observer.next("C");},3000);
    setTimeout(()=>{observer.next("D");},4000);
    //setTimeout(()=>{observer.error(new Error(
   //   "Something went wrong! Please try again later"));
  //},4000);
    setTimeout(()=>{observer.next("E");},5000);
    setTimeout(()=>{observer.complete();},6000);
  }); */
  // array1=[1,2,6,7,8];
  // array2=['A','B','C'];
  // of accepts any number of argument /  it emits each argument as it is without changing anything
  //myObservable = of(this.array1,this.array2,20,79,'Hello');
 
  // from takes an iterable(and iterates over it and emits that value one by one) or a promise(converts a promise to an observable) as an argument // takes one argument
 /*  myObservable = from(this.array1).pipe(map((val)=>{
    return val*5;
  }),filter((val)=>{
    return val>=30;
  })); */
   /* transformedObs=this.myObservable.pipe(map((val)=>{
    return val*5;
  }),filter((val)=>{
    return val>=30;
  })); */
  /* filteredObs=this.transformedObs.pipe(filter((val)=>{
    return val>=30;
  })); */

  counterObservabble=interval(1000);
  counterSub!:any;
  ngOnInit(){
/*     this.myObservable.subscribe((val:any)=>{
      console.log(val);
    },(error:Error)=>{
      alert(error.message);
    },()=>{
      alert("Observable has completed emtiting all values.");
    }); */

  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }
  subscribe(){
    this.counterSub= this.counterObservabble.subscribe((val)=>{
      console.log(val);
    });  }
  
}
