import storeOfApp from './modules/app';

function mapGetters(getter: any) {
  let getters = {};
  for (const a in getter) {
    if (typeof getter[a] === 'function') {
      getters = { ...getters, ...{ [a]: getter[a] } };
    }
  }
  return getters;
}

export { mapGetters, storeOfApp };
