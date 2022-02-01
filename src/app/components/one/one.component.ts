import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Visit(){
    this.router.navigate(['/two']);
  }

}
