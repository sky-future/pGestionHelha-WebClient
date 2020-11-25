import { CreateCarPipe } from './create-car.pipe';

describe('CreateCarPipe', () => {
  it('create an instance', () => {
    const pipe = new CreateCarPipe();
    expect(pipe).toBeTruthy();
  });
});
