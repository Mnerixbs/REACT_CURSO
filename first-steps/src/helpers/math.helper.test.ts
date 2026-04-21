import {describe, expect, test} from 'vitest'
import { add, substract } from './math.helper';


describe('add', ()=>{
    test('should  suma', () => {
      const a = 1;
      const b = 2;

      const result = add(a,b);
    
      expect(result).toBe(a+b);
    });
    
});

describe ('substract', ()=>{
    test('should  resta', () => {
      const a = 1;
      const b = 2;

      const result = substract(a,b);
    
      expect(result).toBe(a - b);
    });
});


