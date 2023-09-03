import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

const namespace = 'ui-stencil';
const componentCorePackage = namespace;

export const config: Config = {
  namespace,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../ui-stencil-react/src/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
