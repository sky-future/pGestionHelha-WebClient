import { PasswordTransformPipe } from './password-transform.pipe';

describe('PasswordTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
