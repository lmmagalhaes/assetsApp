import { Controller, Get } from '@nestjs/common';

@Controller('exemplo')
export class ExemploController {
  @Get()
  async scrapping() {
    const q = [
      { nome: 'Leonardo', idade: 32 },
      { nome: 'João', idade: 24 },
      { nome: 'Maria', idade: 18 },
      { nome: 'Pedro', idade: 16 },
    ];
    // const x = ['banana', 'maçã', 'laranja'];
    // x.forEach((element) => {
    //   const data = {
    //     name: element,
    //   };
    //   console.log(data);
    //   return data;
    // });
    const w = q.map((element) => ({
      titulo: element.nome,
      descricao: `${element.nome} tem ${element.idade} anos.`,
    }));

    console.log(w);

    return w;
  }
}
