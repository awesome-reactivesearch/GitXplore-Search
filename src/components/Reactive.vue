<template>
  <section class="container">
    <ReactiveBase
      app="gitxplore-app"
      credentials="0f448043059d:a4264120-cd7a-4574-a449-2c5df0523cb1"
      url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
      enableAppbase
    >
      <div class="flex row-reverse app-container">
        <Navigation
          @setTopics="setTopics"
          v-bind:currentTopics="currentTopics"
        />
        <div class="results-container">
          <SearchBox
            componentId="search-box"
            iconPosition="right"
            :dataField="[
              'name',
              'name.keyword',
              'description',
              'fullname',
              'owner',
              'topics',
            ]"
            :fiedlWeights="[3, 4, 1, 2, 2, 2]"
            className="search-box"
            :showClear="true"
            placeholder="Search for repos"
            :enableRecentSuggestions="true"
            :enablePopularSuggestions="true"
            :enablePredictiveSuggestions="true"
            :popularSuggestionsConfig="{
              size: 3,
              minHits: 2,
              minChars: 4,
            }"
            :recentSuggestionsConfig="{
              size: 3,
              minChars: 4,
              index: 'gitxplore-app',
            }"
            index="gitxplore-app"
            :size="10"
            :innerClass="{
              input: 'search-input',
            }"
          />
          <div class="result-list">
            <SelectedFilters class="m1" />
            <ReactiveList
              componentId="results"
              :includeFields="['*']"
              dataField="name.keyword"
              :pagination="true"
              :from="0"
              :size="6"
              :innerClass="{
                list: 'result-list-container',
                pagination: 'result-list-pagination',
                resultsInfo: 'result-list-info',
                poweredBy: 'powered-by',
              }"
              :react="{
                and: [
                  'search-box',
                  'language',
                  'topics',
                  'repo',
                  'stars',
                  'forks',
                ],
              }"
              :sortOptions="[
                {
                  label: 'Best Match',
                  dataField: '_score',
                  sortBy: 'desc',
                },
                {
                  label: 'Most Stars',
                  dataField: 'stars_num',
                  sortBy: 'desc',
                },
                {
                  label: 'Fewest Stars',
                  dataField: 'stars_num',
                  sortBy: 'asc',
                },
                {
                  label: 'Most Forks',
                  dataField: 'forks',
                  sortBy: 'desc',
                },
                {
                  label: 'Fewest Forks',
                  dataField: 'forks',
                  sortBy: 'asc',
                },
                {
                  label: 'A to Z',
                  dataField: 'owner.keyword',
                  sortBy: 'asc',
                },
                {
                  label: 'Z to A',
                  dataField: 'owner.keyword',
                  sortBy: 'desc',
                },
                {
                  label: 'Recently Updated',
                  dataField: 'pushed',
                  sortBy: 'desc',
                },
                {
                  label: 'Least Recently Updated',
                  dataField: 'pushed',
                  sortBy: 'asc',
                },
              ]"
              className="results-wrapper"
            >
              <div slot="render" slot-scope="{ loading, error, data }">
                <div v-if="loading">Fetching Results.</div>
                <div v-if="Boolean(error)">
                  Something went wrong! Error details
                  {{ JSON.stringify(error) }}
                </div>

                <div v-bind:key="item._id" v-for="item in data">
                  <div key="{{item.name}}" class="result-item">
                    <div class="flex align-center result-card-header">
                      <img
                        class="avatar"
                        :src="item.avatar"
                        alt="User avatar"
                      />
                      <a
                        class="link"
                        :href="item.url"
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
                    <div v-if="Array.isArray(item.topics)" class="flex wrap">
                      <div
                        v-for="(tag, index) in item.topics.slice(0, 7)"
                        :key="index"
                        v-bind:class="[
                          currentTopics.includes(tag) ? 'active' : '',
                          'topic',
                        ]"
                        @click="toggleTopic(tag)"
                      >
                        #{{ tag }}
                      </div>
                    </div>
                    <div class="flex">
                      <div>
                        <div class="btn card-btn">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          {{ item.stars }}
                        </div>
                      </div>
                      <div>
                        <div class="btn card-btn">
                          <i class="fa fa-code-fork" aria-hidden="true"></i>
                          {{ item.forks }}
                        </div>
                      </div>
                      <div>
                        <div class="btn card-btn">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                          {{ item.watchers }}
                        </div>
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
import Navigation from "./Header.vue";

export default {
  name: "Reactive",
  components: {
    Navigation,
  },
  data() {
    return {
      currentTopics: [],
    };
  },

  methods: {
    setTopics(currentTopics) {
      this.currentTopics = currentTopics || [];
    },
    toggleTopic(topic) {
      const Topics = this.currentTopics;
      const nextState = Topics.includes(topic)
        ? Topics.filter((item) => item !== topic)
        : Topics.concat(topic);
      this.currentTopics = nextState;
    },
  },
};
</script>

<style>
.search-box {
  padding: 20px;
  width: 100%;
  max-width: 600px;
  right: 0;
}
.results-wrapper > div:nth-child(2) {
  display: flex;
  flex-wrap: wrap;
}
</style>
