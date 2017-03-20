<template>
  <div class="entry"
    draggable="true">
    <div class="handle"></div>
    <div class="what-wrapper">
      <div v-model="entry.what" class="what">{{entry.what}}</div>      
    </div>
    <div class="how">
      <div v-if="node.children.length > 1" class="drop-zone"></div>
      <entry
        v-for="childNode in node.children"
        :entries="entries"
        :node="childNode"
        :parent="node"
        :key="childNode.entryId">
      </entry>
      <div class="drop-zone"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entry',
  props: ['entries', 'node', 'parent'],
  data () {
    return {
      entry: this.entries[this.node.entryId]
    }
  }
}
</script>



<style lang="sass" scoped>
.entry
  margin: 15px
  margin-left: 30px
  padding: 15px
  border: 1px solid black
  position: relative
  background-color: white

.handle
  position: absolute
  top: -1px
  left: -17px
  height: 100%
  width: 15px
  background-color: gray
  border: 1px solid black

textarea
  width: 90%
  margin: 5%
  font-size: 12px
  border: none
</style>
