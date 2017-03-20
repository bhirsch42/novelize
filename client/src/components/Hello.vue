<template>
  <div class="hello">
    <div v-for="ordering in orderings" class="entry-tree-wrapper">
      <h1>{{ordering.name}}</h1>
      <entry-tree :structure="ordering.structure" :entries="entries"></entry-tree>      
    </div>
  </div>
</template>

<script>
import resource from '../lib/resource'
import EntryTree from './EntryTree'

function getEntriesAndStructure (story) {
  let entries = {}
  let structure = []
  let currentId = 0

  function flatten (entry, parent) {
    entries[currentId] = {
      what: entry.what
    }
    let node = {
      entryId: currentId,
      children: []
    }
    parent.push(node)
    currentId++
    if (entry.how) {
      entry.how.forEach(entry => flatten(entry, node.children))
    }
  }

  story.forEach(entry => {
    flatten(entry, structure)
  })

  return {
    entries: entries,
    structure: structure
  }
}

export default {
  name: 'hello',
  components: {
    EntryTree
  },
  data () {
    return {
      entries: {},
      orderings: [
        {
          name: 'Chronological',
          structure: []
        },
        {
          name: 'Narrative',
          structure: []
        }
      ]
    }
  },
  created () {
    resource.getStory().then(story => {
      let entriesAndStructure = getEntriesAndStructure(story.entries)
      this.entries = entriesAndStructure.entries
      this.orderings[0].structure = entriesAndStructure.structure
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.hello
  display: flex

.entry-tree-wrapper
  height: 100vh
  width: 50%
  overflow-y: scroll
  padding: 15px


</style>
