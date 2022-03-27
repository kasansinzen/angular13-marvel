import { Pipe, PipeTransform } from '@angular/core';
import { UrlService } from 'src/app/core/http/url.service';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  constructor(
    private urlService: UrlService
  ) { }

  transform(value: string | number, arg: string): string {
    switch(arg) {
      case "urlCharacter": return `${this.urlService.urlCharacter}/${value}`;
      default: return "";
    }
  }

}
