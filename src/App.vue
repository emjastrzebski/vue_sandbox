<template>
  <div id="app">

      <div>
          <div>
              <button class="btn btn-default" @click="showAddForm()">Add task</button>
          </div>
          <div v-if="showAddformControl">
              <NewTaskForm/>
          </div>

      </div>
      <TasksList title="New tasks" :tasks="this.$store.getters.tasksNew"/>
      <TasksList title="In progress" :tasks="this.$store.getters.tasksInProgress"/>
      <TasksList title="In review" :tasks="this.$store.getters.tasksInReview"/>
      <TasksList title="Done" :tasks="this.$store.getters.tasksDone"/>
      <TasksList title="Closed" :tasks="this.$store.getters.tasksClosed"/>
  </div>

</template>

<script>

// import Task from "./components/Task.vue"

import TasksList from './components/TasksList.vue'
// import store from './components/store.vue'

 import NewTaskForm from './components/NewTaskForm.vue'

import currentConfig from './data/config'
import tasks from './data/data'

export default {
  name: 'app',
  components: {
    TasksList,
      NewTaskForm
  },
    computed: {
        tasksToShow: function() {
            return this.$store.state.tasks;
        },

    },
    data: function() {
        return {
            showAddformControl: false
        }
    },
    methods: {
        loadConfig: function () {
            this.$store.commit('setConfig', currentConfig);
        },
        loadTasks: function () {
            this.$store.commit('setTasks', tasks);

        },
        showAddForm: function() {
            this.showAddformControl = !this.showAddformControl;
        },

    },
    mounted: function() {
        this.loadConfig();
        this.loadTasks();
    }
}
</script>

<style>

</style>
