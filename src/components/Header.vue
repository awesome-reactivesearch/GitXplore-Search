<template>
  <div>
    <nav v-bind:class="[visible ? 'active' : '', 'navbar']">
      <div class="title">GitXplore</div>
      <div class="btn toggle-btn" onClick="toggleVisibility">
        Toggle Filters
      </div>
       	<div v-bind:class="[!visible ? 'hidden' : '', 'flex column filters-container']">
          <div class="child m10">
            <MultiDropdownList
              componentId="language"
              dataField="language.raw"
              placeholder="Select languages"
              title="Language"
              filterLabel="Language"
            />
          </div>
          <div class="child m10">
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
  </div>
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

<style scoped>
.navbar.active {
  height: 100vh;
}

.title {
  color: black;
  font-family: "Monoton", cursive;
  font-size: 2rem;
  text-align: center;
}

.btn {
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  text-align: center;
  border-radius: 4px;
}

.toggle-btn {
  color: black;
  border: 1px solid black;
  display: none;
  max-width: 200px;
  font-size: 1.3rem;
  align-self: center;
  padding: 10px;
  margin-top: 10px;
}

.navbar {
  left: 0;
  width: 400px;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  z-index: 3;
}

.flex {
  display: flex;
}

.column {
  flex-direction: column;
}


.filters-container {
  max-height: calc(100vh - 100px);
  height: 100%;
  overflow-y: auto;
}

@media all and (max-width: 1200px) {
 .toggle-btn {
    display: block;
  }
 .hidden {
    display: none;
  }
}
</style>
