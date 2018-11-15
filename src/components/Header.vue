<template>
    <nav v-bind:class="[visible ? 'active' : '', 'navbar']">
      <div class="title">GitXplore</div>
      <div class="btn toggle-btn" @click="toggleVisibility">
        Toggle Filters
      </div>
       	<div v-bind:class="[!visible ? 'hidden' : '', 'flex column filters-container']">
          <div class="m10">
            <MultiDropdownList
              componentId="language"
              dataField="language.raw"
              placeholder="Select languages"
              title="Language"
              filterLabel="Language"
            />
          </div>
          <div class="m10">
            <MultiDropdownList
              componentId="topics"
              dataField="topics.raw"
              placeholder="Select topics"
              title="Repo Topics"
              filterLabel="Topics"
              :size="1000"
              queryFormat="and"
            />
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Header",
  props:{
  	setTopics: Function,
  	currentTopics: Array
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggleVisibility() {
		this.visible = !this.visible
    }
  }
};
</script>

<style>

</style>
