describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "GHI JKL" para "ABC DEF" con offset 6',()=>{
      assert(cipher.encode(6,"ABC DEF"),"GHI JKL");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "ghi jkl" para "abc def" con offset 6',()=>{
      assert(cipher.encode(6,"abc def"),"ghi jkl");
    });

    it('debería retornar "ghi jkl" para "abc def" con offset 6',()=>{
      assert(cipher.encode(6,"abc def"),"ghi jkl");
    });

    it('debería retornar "Ovsh" para "Hola" con offset 7',()=>{
      assert(cipher.encode(6,"Hola"),"Ovsh");
    });

    it('debería retornar "1234567890" para "23456789:1" con offset 1',()=>{
      assert(cipher.encode(1,"23456789:1"),"1234567890");
    });

    it("debería retornar $Hola$ para 'Krod' con offset 3",()=>{
      assert(cipher.encode(3,"'Krod'"),"$Hola$");
    });

    it("debería retornar ->?Pl= para #>?Fb= con offset 10",()=>{
      assert(cipher.encode(10,"#>?Fb="),"->?Pl=");
    });
   
    it("debería retornar Idrj 456789:;< para Faog 123456789 con offset 3",()=>{
      assert(cipher.encode(10,'Faog 123456789'),'Idrj 456789:;<');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "ABC DEF" para "GHI JKL" con offset 6',()=>{
      assert(cipher.decode(6,"GHI JKL"),"ABC DEF");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para con offset 33',()=>{
      assert(cipher.encode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "abc def" para "ghi jkl" con offset 6',()=>{
      assert(cipher.decode(6,"ghi jkl"),"abc def");
    });
    
    it('debería retornar "Hola" para "Ovsh" con offset 7',()=>{
      assert(cipher.decode(6,"Ovsh"),"Hola");
    });

    it('debería retornar "23456789:1" para "1234567890" con offset 1',()=>{
      assert(cipher.decode(1,"1234567890"),"23456789:1");
    });

    it("debería retornar 'Krod' para $Hola$ con offset 3",()=>{
      assert(cipher.decode(3,"$Hola$"),"'Krod'");
    });

    it("debería retornar #>?Fb= para ->?Pl= con offset 10",()=>{
      assert(cipher.decode(10,"->?Pl="),"#>?Fb=");
    });

    it("debería retornar Faog 123456789 Idrj 456789:;< para Faog 123456789 con offset 3",()=>{
      assert(cipher.decode(10,'Idrj 456789:;<'),'Faog 123456789');
    });
    
  });


});
