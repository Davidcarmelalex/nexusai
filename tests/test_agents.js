const assert = require('assert');

describe('Agent validation', () => {
  it('requires name and trigger', () => {
    const validate = ({ name, trigger }) => !!(name && trigger);
    assert.strictEqual(validate({ name: 'Bot', trigger: 'webhook' }), true);
    assert.strictEqual(validate({ name: '', trigger: 'webhook' }), false);
    assert.strictEqual(validate({ name: 'Bot', trigger: '' }), false);
  });
});
