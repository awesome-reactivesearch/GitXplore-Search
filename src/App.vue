<template>
  <div id="app">
    <Reactive />
  </div>
</template>

<script>
import Reactive from "./components/Reactive.vue";

export default {
  name: "app",
  components: {
    Reactive,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Raleway", "Arial", sans-serif;
  background: #f3f6f7;
}
/* containers */
.container {
  width: 100%;
  height: 100vh;
}

.search-box {
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
  width: calc(100% - 370px);
}

.result-list {
  margin-top: 80px;
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
  background: #182636;
  left: 0;
  width: 370px;
  height: 100vh;
  position: fixed;
  z-index: 3;
}

.title {
  color: black;
  background: #23354c;
  font-size: 2rem;
  text-align: center;
}

/* components */
.avatar {
  height: 50px;
}

.btn {
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  text-align: center;
}

.card-btn {
  background: #eff3f6;
  min-width: 100px;
}

.card-btn:hover {
  background: #04d07d;
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
  background: #06f393;
  margin: 3px;
  padding: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  min-width: 55px;
}

.topic:hover {
  background: #04d07d;
}

.topic.active {
  background: #04d07d;
}

.toggle-btn {
  color: #6a6969;
  border: 1px solid #6a6969;
  display: none;
  max-width: 200px;
  font-size: 1.3rem;
  align-self: center;
  padding: 10px;
  margin-top: 10px;
}

.toggle-btn:hover {
  color: #918f8f;
  border: 1px solid #918f8f;
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
  width: 450px;
  min-height: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
}

.result-item:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
    max-width: 375px;
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
  }
  .results-container {
    width: 100%;
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

  .search-box {
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
  .search-box {
    width: 100%;
    right: auto;
    padding: 0 30px;
    margin-top: 65px;
  }

  .search-input {
    height: 36px;
  }

  .title {
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>
