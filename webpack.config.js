module: {
  rules: [
    // ...
    {
      test: /\.jpe?g$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
    // ...
  ];
}