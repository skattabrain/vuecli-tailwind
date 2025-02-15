import { colorMap } from '../../utils/colors.js';

export default {
  title: 'Base/Colors',
};

export const palette = () => ({
  data: () => ({
    colors: colorMap(),
  }),
  template: `
<div class="p-3">
  <div v-for="color in colors" class="mb-6">
    <h3 class="capitalize font-semibold mb-2 text-lg text-gray-900">{{ color.name }}</h3>
    <div class="flex flex-wrap">
      <div v-for="variation in color.variations" class="flex mb-6 w-1/2 sm:w-52">
        <div :class="variation.bg" class="border-solid border border-gray-300 shadow-md rounded p-3 h-16 w-16 mr-4 sm:mr-2"></div>
        <div class="flex flex-col flex-grow items-start justify-center space-y-1">
          <div class="font-bold text-sm text-gray-700">{{ variation.color }}</div>
          <div class="font-mono text-xs text-red-500">x-{{ variation.suffix ? variation.suffix : color.name }}</div>
          <div class="font-mono text-xs text-red-400 uppercase">{{ variation.hex }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
});
