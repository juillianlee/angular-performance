import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'statusUser',
  pure: true
})
export class StatusUserPipe implements PipeTransform {

  // @memo()
  transform(status: number): string {
    console.log(status);
    switch (status) {
      case 1:
        return 'Ativo';
      case 2:
        return 'Inativo';
      case 3:
        return 'Não registrado';
      case 4:
        return 'Não completou o cadastro';
      case 5:
        return 'Novo registro';
      default:
        return 'Desconhecido';
    }
  }

}
