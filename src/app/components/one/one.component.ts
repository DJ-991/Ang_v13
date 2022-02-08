import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  // allowServer = false;

// Code
inputValue ='';
list: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
    if (this.inputValue.trim() !== ""){
     this.list.push({
      name: this.inputValue,
      isCompleted: false
    })
      this.inputValue = '';
    }
  }
  RemoveItem(i: number):void {
    this.list.splice(i, 1);
  }







  // Visit(){
  //   this.allowServer = true;
  // }

}
