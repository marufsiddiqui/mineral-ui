/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const webpackMerge = require('webpack-merge');
const makeWebpackConfig = require('../../utils/makeWebpackConfig');

const baseConfig = makeWebpackConfig({
  packageName: 'HelloWorld',
  packagePath: __dirname
});

const config = webpackMerge(baseConfig, {
  externals: {
    '@mineral-ui/hello': {
      root: 'Hello',
      commonjs: '@mineral-ui/hello',
      commonjs2: '@mineral-ui/hello',
      amd: '@mineral-ui/hello'
    },
    '@mineral-ui/style-utils': {
      root: 'StyleUtils',
      commonjs: '@mineral-ui/style-utils',
      commonjs2: '@mineral-ui/style-utils',
      amd: '@mineral-ui/style-utils'
    },
    '@mineral-ui/world': {
      root: 'World',
      commonjs: '@mineral-ui/world',
      commonjs2: '@mineral-ui/world',
      amd: '@mineral-ui/world'
    }
  }
});

module.exports = config;