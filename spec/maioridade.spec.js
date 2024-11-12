describe("Teste de validação - Maior Idade", function(){
    
    it("Validação Maior idade", function(){
        expect(maioridade(18)).toBe('Maior idade');
    });
});

describe("Teste de validação - Menor de Idade", function(){
    
    it("Validação Menor idade", function(){
        expect(maioridade(10)).toBe('Menor idade');
    });
});
