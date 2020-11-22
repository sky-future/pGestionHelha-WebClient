import { CreateUserLoginPipe } from './create-user-login.pipe';

describe('CreateUserLoginPipe', () => {
  it('create an instance', () => {
    const pipe = new CreateUserLoginPipe();
    expect(pipe).toBeTruthy();
  });
});
