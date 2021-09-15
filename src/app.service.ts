import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findMe(variants: number[], sum: number): number[] {

    if(!variants.length) {
      return  []
    }

    for (let i = 0; i < variants.length; i++) {
      for(let j = i + 1; j < variants.length; j++) {

        if (sum === variants[i] + variants[j]) {
          return [variants[i] ,variants[j]]
        }
      }
    }

    return []
  }
}
