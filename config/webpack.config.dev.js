{
  test: /\.(js|jsx)$/,
  include: paths.appSrc,
  loader: 'babel',
  query: {
    plugins: ['transform-decorators-legacy'], // Add this

    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true
  }
},