import { Suspense, lazy, type ComponentType } from 'react';

const routeFallback = (
  <div className="min-h-[45vh] w-full" aria-hidden />
);

export function lazyRoute<T extends ComponentType<object>>(
  importer: () => Promise<{ default: T }>,
): ComponentType {
  const LazyComp = lazy(importer);
  return function LazyRoute() {
    return (
      <Suspense fallback={routeFallback}>
        <LazyComp />
      </Suspense>
    );
  };
}
