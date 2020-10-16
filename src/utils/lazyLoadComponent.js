import loadable from '@loadable/component';

const lazyLoadComponent = (loadFn, loading) => {
  return loadable(loadFn, { fallback: loading });
};

export default lazyLoadComponent;