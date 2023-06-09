import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'border-base': 'border-gray-400:10',
    },
    ['btn', 'px-4 py-1 rounded inline-block bg-indigo-500 text-white cursor-pointer hover:bg-indigo-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 transition'],
    ['btn-light', 'px-4 py-1 rounded inline-block text-indigo-500 border border-indigo-500 cursor-pointer hover:bg-indigo-600 hover:text-white disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 transition'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-indigo-500 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
