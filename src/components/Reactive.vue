<template>
  <section class="container">
    <ReactiveBase
      app="gitxplore-app"
      credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
      type="gitxplore-latest"
    >
      <div class="flex row-reverse app-container">
        <Header :setTopics="setTopics" :currentTopics="currentTopics"/>
        <div class="results-container">
            <DataSearch
              componentId="repo"
              filterLabel="Search"
              :dataField="[
                'name',
                'description',
                'name.raw',
                'fullname',
                'owner',
                'topics'
              ]"
              placeholder="Search Repos"
              iconPosition="left"
              :autosuggest="true"
              URLParams
              class="data-search-container results-container"
              :innerClass="{
                input: 'search-input'
              }"
            />
          <div class="result-list">
            <SelectedFilters class="m1" />
            <ReactiveList
              componentId="results"
              dataField="name.raw"
              :pagination="true"
              :from="0"
              :size="6"
              :innerClass="{
                list: 'result-list-container',
                pagination: 'result-list-pagination',
                resultsInfo: 'result-list-info',
                poweredBy: 'powered-by'
              }"
              :react="{
                and: ['language', 'topics', 'repo']
              }"
              :sortOptions="[
                {
                  label: 'Best Match',
                  dataField: '_score',
                  sortBy: 'desc'
                },
                {
                  label: 'Most Stars',
                  dataField: 'stars',
                  sortBy: 'desc'
                },
                {
                  label: 'Fewest Stars',
                  dataField: 'stars',
                  sortBy: 'asc'
                },
                {
                  label: 'Most Forks',
                  dataField: 'forks',
                  sortBy: 'desc'
                },
                {
                  label: 'Fewest Forks',
                  dataField: 'forks',
                  sortBy: 'asc'
                },
                {
                  label: 'A to Z',
                  dataField: 'owner.raw',
                  sortBy: 'asc'
                },
                {
                  label: 'Z to A',
                  dataField: 'owner.raw',
                  sortBy: 'desc'
                },
                {
                  label: 'Recently Updated',
                  dataField: 'pushed',
                  sortBy: 'desc'
                },
                {
                  label: 'Least Recently Updated',
                  dataField: 'pushed',
                  sortBy: 'asc'
                }
              ]"
            >
              <div slot="onResultStats" slot-scope="{ results, time }">
                  <div class="flex justify-end">
                    <h5>{{ results }} Results Found In {{ time }} Milliseconds</h5>
                  </div>
              </div>
              <div slot="onData" slot-scope="{ item }">
                <div key="{{item.name}}" class="result-item">
                  <div
                    class="flex justify-center align-center result-card-header"
                  >
                    <img
                      class="avatar"
                      :src="item.avatar"
                      alt="User avatar"
                    />
                    <a
                      class="link"
                      href="{item.url}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div class="flex wrap">
                        <div>{{ item.owner }}/</div>
                        <div>{{ item.name }}</div>
                      </div>
                    </a>
                  </div>
                  <div class="m10-0">{{ item.description }}</div>
                  <div class="flex wrap justify-center">
                    <div
                      v-for="(tag, index) in item.topics.slice(0, 7)"
                      :key="index"
                      class="topic"
                      v-bind:class="[currentTopics.includes(item) ? 'active' : '', 'topic']"
                      @Click="toggleTopic(item)"
                    >
                      {{ tag }}
                    </div>
                  </div>
                  <div class="flex">
                    <div>
                      <div class="btn card-btn">
                        <font-awesome-icon icon="star" />
                        {{ item.stars }}
                      </div>
                    </div>
                    <div>
                      <div class="btn card-btn">
                        <font-awesome-icon icon="code-branch" />
                        {{ item.forks }}
                      </div>
                    </div>
                    <div>
                      <div class="btn card-btn">
                        <font-awesome-icon icon="eye" />
                        {{ item.watchers }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactiveList>
          </div>
        </div>
      </div>
    </ReactiveBase>
  </section>
</template>

<script>

import Header from "./Header.vue"

export default {
  name: "Reactive",
  components:{
    Header
  },
  props: {},
  data(){
    return{
      currentTopics: []
    }
  },

  methods:{
    setTopics(){
        this.currentTopics = this.currentTopics || []
    },
    toggleTopic(topic){

        const currentTopics  = this.currentTopics;
        const nextState = currentTopics.includes(topic)
          ? currentTopics.filter(item => item !== topic)
          : currentTopics.concat(topic);
        
        this.currentTopics = nextState;

    }
  }
};
</script>

<style>

</style>
