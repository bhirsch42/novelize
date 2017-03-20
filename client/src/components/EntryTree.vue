<template>
  <div class="entry-tree">
    <div class="drop-zone"></div>
    <entry v-for="node in structure" :entries="entries" :node="node" :parent="structure" :key="node.entryId"></entry>
    <div v-if="structure.length > 0" class="drop-zone"></div>
  </div>
</template>

<script>
import Entry from './Entry'
export default {
  name: 'entry-tree',
  components: {
    Entry
  },
  props: ['entries', 'structure']
}
</script>



<style lang="sass">
.entry
  margin: 15px
  border: 1px solid black

.drop-zone
  height: 30px
  border: 1px solid red
</style>
