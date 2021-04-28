import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import data from "./ads"
import { Ad } from "./ad.model";

@Injectable({
  providedIn: "root"
})
export class AdService {
	ads: Ad[];
	constructor(private http: HttpClient) {
		this.ads = data;
	}
	
	getPhotos() {
		return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=20');
	}
	
	getAll(): Ad[] {
		return [...this.ads];
	}
	
	getById(id: string) {
		return {
			...this.ads.find(ad => {
				return ad.adId === id;
			})
		};
	}

	delete(id: string) {
		this.ads = this.ads.filter(ad => {
			return ad.adId !== id;
		});
	}
	
	add(ad: Ad) {
		this.ads.push(ad);
	}
}
