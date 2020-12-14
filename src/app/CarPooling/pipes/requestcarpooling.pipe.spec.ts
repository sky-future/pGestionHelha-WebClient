import { RequestcarpoolingPipe } from './requestcarpooling.pipe';

describe('RequestcarpoolingPipe', () => {
  it('create an instance', () => {
    const pipe = new RequestcarpoolingPipe();
    expect(pipe).toBeTruthy();
  });
});
