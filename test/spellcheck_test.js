describe('spellChecker', function() {
  it('should work', function() {
    assert(window.spellChecker.spellCheck('correct'));
    assert(!window.spellChecker.spellCheck('fhqwgads'));
  });
});
