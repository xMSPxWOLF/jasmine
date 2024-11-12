describe("teste calculadora", function(){

    it('somas válidas', function(){
        expect(soma(1,2)).toBe(3);
        expect(soma(9,9)).toBe(18);
    })

    it('somas Inválidas', function(){
        expect(soma(1,2)).not.toBe(5);
        expect(soma(9,9)).not.toBe(15);
    })

    it('Subtrações válidas', function(){
        expect(Subtracao(3,2)).toBe(1);
        expect(Subtracao(9,9)).toBe(0);
    })

    it('Multiplicações válidas', function(){
        expect(Multiplicacao(1,2)).toBe(2);
        expect(Multiplicacao(9,9)).toBe(81);
    })

    it('Divisões válidas', function(){
        expect(Divisao(2,2)).toBe(1);
        expect(Divisao(18,9)).toBe(2);
    })

})