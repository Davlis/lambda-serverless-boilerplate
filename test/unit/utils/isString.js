const { expect } = require('chai');
const { isString } = require('../../../src/utils');

describe('isString test suite', () => {
  it('Should inform about string value', async () => {
    const value = 'String';
    const result = isString(value);

    expect(result).to.eql(true);
  });

  it('Should inform about non-string value', async () => {
    const value = { string: 'hello' };
    const result = isString(value);

    expect(result).to.eql(false);
  });
});
