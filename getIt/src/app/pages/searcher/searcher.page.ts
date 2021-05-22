import { Component, OnInit } from '@angular/core';
import { PARAMETERS } from '../../helpers/constants';
import { Router } from "@angular/router";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.page.html',
  styleUrls: ['./searcher.page.scss'],
})
export class SearcherPage implements OnInit {

	public parameters: String[] = PARAMETERS;

	constructor(private router: Router) {}

	OnChange(event) {
		
		switch(event.target.value){
			case "Area de Trabajo": 
				this.router.navigate(['search-ad-by-work-area']);
				break;
			case "Ubicacion":
				this.router.navigate(['search-ad-by-address']);
				break;
			case "Tiempo requerido/ofertado": 
				this.router.navigate(['search-ad-by-required-time']);
				break;
			case "Honorarios/Precio":
				this.router.navigate(['search-ad-by-fee']);
				break;
			case "Email":
				this.router.navigate(['search-user-by-email']);
				break;
		}
	}

}
