<template>
  <nav v-bind:class="[visible ? 'active' : '', 'navbar']">
    <div class="title">
      <img
        src="https://uploads.codesandbox.io/uploads/user/2cf21600-f80d-4c43-9da6-2d3dde67dec5/bfE_-Screenshot%202018-12-15%20at%205.38.21%20PM.png"
      />
    </div>
    <div class="btn toggle-btn" @click="toggleVisibility">Toggle Filters</div>
    <div
      v-bind:class="[!visible ? 'hidden' : '', 'flex column filters-container']"
    >
      <div class="m10">
        <MultiDropdownList
          componentId="language"
          dataField="language.raw"
          placeholder="Select languages"
          title="Language"
          filterLabel="Language"
          :innerClass="{
            select: 'dropdown-select',
            title: 'inner-title',
            list: 'dropdown-list'
          }"
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
          :innerClass="{
            select: 'dropdown-select',
            title: 'inner-title',
            list: 'dropdown-list'
          }"
          @valueChange="updateTopics"
          v-bind:defaultSelected="currentTopics"
        />
      </div>
      <div class="m10">
        <RangeSlider
          dataField="stars"
          componentId="stars"
          title="Repo Stars"
          :range="{
            start: 0,
            end: 300000
          }"
          :defaultSelected="{
            start: 0,
            end: 300000
          }"
          :innerClass="{
            title: 'inner-title',
            slider: 'inner-slider-ui'
          }"
          :rangeLabels="{
            start: '0',
            end: '300K'
          }"
        />
      </div>
      <div class="m10">
        <RangeSlider
          dataField="forks"
          componentId="forks"
          title="Repo Forks"
          :range="{
            start: 0,
            end: 180000
          }"
          :defaultSelected="{
            start: 0,
            end: 180000
          }"
          :innerClass="{
            title: 'inner-title',
            slider: 'inner-slider-ui'
          }"
          :rangeLabels="{
            start: '0',
            end: '1800K'
          }"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    currentTopics: Array
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
    updateTopics(value) {
      this.$emit("setTopics", value);
    }
  }
};
</script>

<style>
.inner-title {
  color: #6a6969 !important;
  font-size: 0.9rem !important ;
}

.dropdown-select {
  background: #162332 !important;
  color: #525b68 !important;
  border: 1px solid #162332 !important;
}

.dropdown-list li {
  background: #162332 !important;
  color: #525b68 !important;
}

.dropdown-list {
  border: 1px solid #162332 !important;
}

.inner-slider-ui .vue-slider-component .vue-slider-process {
  background-color: #06f393 !important;
}

.inner-slider-ui .label-container .range-label-right {
  color: #4e5865;
}

.inner-slider-ui .label-container .range-label-left {
  color: #4e5865;
}

.inner-slider-ui .vue-slider-component .vue-slider-dot-handle {
  background-color: #06f393 !important;
  border: none;
}

.inner-slider-ui
  .vue-slider-component
  .vue-slider-process
  .vue-slider-tooltip-top {
  display: 1px solid #06f393 !important;
}

.inner-slider-ui .vue-slider-component .vue-slider-tooltip {
  display: none !important;
}

.inner-slider-ui .vue-slider-component .vue-slider-dot .vue-slider-dot-handle {
  border: none !important;
}
</style>
