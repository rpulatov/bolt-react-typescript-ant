const path = require('path')
const {override: overrideCra, fixBabelImports, addLessLoader} = require('customize-cra')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')

const options = {
  stylesDir: path.join(__dirname, './src/styles'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/vars.less'),
  mainLessFile: path.join(__dirname, './src/styles/index.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background',
    '@border-color-base',
  ],
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
}

module.exports = overrideCra(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  // config => {
  //   config.plugins.push(new AntDesignThemePlugin(options))
  //   return config
  // },
)
