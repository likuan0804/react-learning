// module.exports = (config) => {
//   // 单独配置装饰器
//   // 如果没有使用customize-cra,就  在这里可以对config进行配置
//   return config
// }

// 自定义的react-config
const { override, addDecoratorsLegacy, fixBabelImports, addLessLoader  } = require ('customize-cra')//自定义cra,

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
)