import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
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
	
	post(dir: string, model: object): Observable<any> {
		return this.http.post<any>(`${environment.api_url}${dir}`, model);
	}
	
	getAll(dir: string, model?: object): Observable<any> {
		return this.http.get<any>(`${environment.api_url}${dir}`, model);
	}
	
	getById(dir: string, id: number): Observable<any> {
		return this.http.get<any>(`${environment.api_url}/${dir}/${id}`);
	}
	
	put(dir: string, id: string, model: object): Observable<any> {
		return this.http.put<any>(`${environment.api_url}/${dir}/${id}`, model);
	}
	
	updateList(dir: string, model: object): Observable<any> {
		return this.http.put<any>(`${environment.api_url}/${dir}`, model);
	}
	
	sendEmail(dir: string, model: object): Observable<any> {
		return this.http.post<any>(dir, model);
	}
	
	
	getPhotos() {
		return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=20');
	}
	
	getAllAd(): Ad[] {
		return [...this.ads];
	}
	
	getAdById(id: string) {
		return {
			...this.ads.find(ad => {
				return ad.adId === id;
			})
		};
	}

	deleteAd(id: string) {
		this.ads = this.ads.filter(ad => {
			return ad.adId !== id;
		});
	}
	
	postAd(ad: Ad) {
		this.ads.push(ad);
	}
}
