import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
      if(!value)return null;
      if(!searchText)return value;

      searchText = searchText.toLowerCase();

      return value.filter(function(data){
          return JSON.stringify(data).toLowerCase().includes(searchText);
      });
  }

}
