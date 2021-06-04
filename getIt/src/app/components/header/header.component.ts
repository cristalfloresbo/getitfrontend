import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() input:boolean;
  public user;
  public cacheUser;
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    /* this.user=JSON.parse(localStorage.getItem('user')); */
    if(localStorage.getItem('user')=="undefined" || localStorage.getItem('user')==null){
      //this.user=undefined;
      this.user=false;
    }else{
      this.user=true;
      this.cacheUser=JSON.parse(localStorage.getItem('user'));
    } 
    //console.log("DEBUG: "+localStorage.getItem('user'));
  }
  

  refresh(){
    if(this.input){
      window.location.reload();
    }    
  }

  onLogOut(){
    //this.auth.auth.signOut();
    localStorage.setItem("user", undefined);
    window.location.reload();
  }
}
