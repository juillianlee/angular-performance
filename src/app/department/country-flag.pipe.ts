import { Pipe, PipeTransform } from '@angular/core';
import { LIST_OF_FLAGS } from '../data/flags';
import memo from 'memo-decorator';

@Pipe({
  name: 'countryFlag',
  pure: true,
})
export class CountryFlagPipe implements PipeTransform {
  @memo()
  transform(country: string): string | null {
    const flag = Object.entries(LIST_OF_FLAGS).filter(([_, value]) => {
      return value === country;
    })[0];

    return flag ? `https://flagcdn.com/16x12/${flag[0]}.png` : null;
  }
}
