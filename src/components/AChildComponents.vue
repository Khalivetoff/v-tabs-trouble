<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({
  name: 'a-child-component',
})
export default class ChildComponent extends Vue {
  @Prop({
    type: [String, Number],
    default: () => {
      return 'default';
    },
  })
  public text!: string;
}
</script>