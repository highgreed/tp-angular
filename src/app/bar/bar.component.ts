import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  userNameObservable: any;
  userName: any;

  constructor(private ConnexionService: ConnexionService) {
    this.userNameObservable = this.ConnexionService.execChange.subscribe((value) => {
      this.userName = value;
    });
  }

  ngOnInit() {
    this.getPseudo();
  }
  
  deconnexion(): void {
    localStorage.removeItem('pseudo');
    localStorage.removeItem('connexion');
    window.location.reload();
  }

  getPseudo(): void {
    this.userName = localStorage.getItem('pseudo');    
  }

}
