<template>
  <div class="">
    <ReactiveBase
      app="gitxplore-app"
      credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
      type="gitxplore-latest"
    >
      <div class="navbar">
      <div class= "flex column filters-container">
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
      </div>

      <div class="">
        <ReactiveList
          componentId="SearchResult"
          dataField="name.raw"
          :pagination="true"
          :from="0"
          :size="5"
          class="col-sm-3"
        >
          <div slot="onData" slot-scope="{ item }">
            <div key="{{item.name}}" class="result-item">
              <div class="flex justify-center align-center result-card-header">
                <img
                  class="avatar"
                  :src="item.avatar"
                  alt="User avatar"
                  width="40"
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
                <span v-for="(tag, index) in item.topics" :key="index">
                  {{ tag }}
                </span>
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
    </ReactiveBase>
  </div>
</template>

<script>
export default {
  name: "Reactive",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* containers */
.container {
  width: 100%;
  height: 100vh;
}

.data-search-container {
  position: fixed;
  z-index: 3;
}

.card-icon {
  margin-right: 4px;
}

.filters-container {
  max-height: calc(100vh - 100px);
  height: 100%;
  overflow-y: auto;
}

.results-container {
  width: calc(100% - 400px);
}

.result-list {
  margin-top: 60px;
}

.result-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.result-list-info {
  margin: 1rem;
  justify-content: space-between;
}

.result-list-pagination {
  margin: 40px 0 50px;
}

.results-container .powered-by {
  display: none;
}

/* header styles */
.navbar {
  background: mediumseagreen;
  left: 0;
  width: 400px;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  z-index: 3;
}

.title {
  color: white;
  font-family: "Monoton", cursive;
  font-size: 2rem;
  text-align: center;
}

/* components */
.avatar {
  height: 50px;
  border-radius: 50%;
}

.btn {
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  text-align: center;
  border-radius: 4px;
}

.card-btn {
  background: #eff3f6;
  min-width: 70px;
}

.card-btn:hover {
  background: #008000;
  color: white;
}

.link {
  cursor: pointer;
  color: mediumseagreen;
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px;
  font-size: 1.2rem;
}

.topic {
  background: mediumseagreen;
  margin: 3px;
  padding: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.topic:hover {
  background: #008000;
}

.topic.active {
  background: #008000;
}

.toggle-btn {
  color: white;
  border: 1px solid white;
  display: none;
  max-width: 200px;
  font-size: 1.3rem;
  align-self: center;
  padding: 10px;
  margin-top: 10px;
}

.toggle-btn:hover {
  background: white;
  color: mediumseagreen;
}

.range-label {
  color: white;
}

.result-item {
  padding: 20px 0;
  margin: 15px;
  padding: 25px;
  border: 1px solid #eee;
  flex-basis: 400px;
  max-width: 400px;
  min-height: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.result-item:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.search-input {
  border: none;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 50px;
}

.search-input:focus {
  border-color: #008000;
  box-shadow: 0 1px 0 0 #008000;
}

/* flex layouts */
.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

.row-reverse {
  flex-direction: row-reverse;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.wrap {
  flex-wrap: wrap;
}

.m10 {
  margin: 10px;
}

.m10-0 {
  margin: 10px 0;
}

.m1,
.result-list .m1 {
  margin: 1rem;
}

/* media queries */
@media all and (max-width: 1280px) {
  .result-item {
    flex-basis: 350px;
    max-width: 350px;
  }

  .result-card-header {
    flex-direction: column;
  }

  .result-card-header > div {
    justify-content: center;
    margin-top: 5px;
  }
}

@media all and (max-width: 1200px) {
  .title {
    text-align: left;
  }

  .result-list {
    margin-top: 170px;
  }

  .navbar {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .navbar.active {
    height: 100vh;
  }

  .results-container {
    width: 100%;
  }

  .data-search-container {
    margin-top: 20px;
    width: calc(100% - 280px);
    right: 20px;
  }

  .toggle-btn {
    display: block;
  }

  .hidden {
    display: none;
  }
}

@media all and (max-width: 992px) {
  .app-container {
    flex-direction: column;
  }

  .result-list {
    margin-top: 220px;
  }
}

@media all and (max-width: 768px) {
  .data-search-container {
    width: 100%;
    right: auto;
    padding: 0 30px;
    margin-top: 65px;
  }

  .search-input {
    height: 42px;
  }

  .title {
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>