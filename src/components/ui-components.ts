// import Vue, { VueConstructor } from 'vue';

// import AChildComponent from '@/components/AChildComponents.vue';
//
// Vue.component('a-child-component', {
//     extends: AChildComponent,
// });

// const components = require.context('./', true, /\.vue$/i)
//
// console.log(components)
//
//
//
// components.keys().map(key => {
//     console.log(components(key).default.options);
//     // @ts-ignore
//     Vue.component(components(key).default.options.name ?? key.split('/').pop().split('.')[0], {
//         extends: components(key).default || components(key),
//     });
// })