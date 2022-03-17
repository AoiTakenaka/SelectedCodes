module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('autoprefixer')({
      grid: true,
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
});
