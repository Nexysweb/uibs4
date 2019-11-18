import * as Index from './index';

test('imports', () => {
  const e = Index;
  expect(typeof e).toEqual('object');
  expect(typeof e.Hoc).toEqual('object');
  expect(typeof e.Components).toEqual('object');
  expect(typeof e.Form).toEqual('object');

  console.log(e.Form)
})