import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  	transform(values: any[], param: string, field: string): any[] {
	  	if (param === ""){
			return [];
		}
		return values.filter((value) => {
			return value[field].toLowerCase().includes(param.toLowerCase())
		});
  	}

}
