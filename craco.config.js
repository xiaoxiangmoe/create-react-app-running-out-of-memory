// @ts-check

/**
 * FIXME: 这些是为了修复 pdfjs-dist 临时引入的
 */

module.exports = {
    webpack: {
      /**
       * @param webpackConfig { import("webpack").Configuration }
       * @param context { {env: 'development' | 'production' | 'test', paths: { [key:string] : string | string[] }} }
       */
      configure: (webpackConfig, { env, paths }) => {
        /**
         * pdf.worker.js window not defined in hmr
         *
         * {@link https://github.com/webpack/webpack/issues/6642}
         */
        webpackConfig.output.globalObject = 'this';
  
        /**
         *
         * 不允许 `require.ensure` 会导致下述错误
         * Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
         *
         * {@link https://github.com/wojtekmaj/react-pdf/issues/280#issuecomment-508901962}
         */
        webpackConfig.module.rules[0].parser.requireEnsure = true;
  
        return webpackConfig;
      },
    },
  };
  