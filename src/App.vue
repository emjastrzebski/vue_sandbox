<template>
  <div id="app">

      <div id="showTaskContainer" v-if="this.$store.getters.doShowTask">
          <Task :task="this.$store.getters.selectedTask"/>
      </div>

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


import TasksList from './components/TasksList.vue'
import NewTaskForm from './components/NewTaskForm.vue'
import Task from "./components/Task";

import currentConfig from './data/config'
import tasks from './data/data'
import owners from './data/owners'


export default {
  name: 'app',
  components: {
        Task,
        TasksList,
        NewTaskForm
  },
    computed: {
        tasksToShow: function() {
            return this.$store.state.tasks;
        },
        ownersToShow: function() {
            return this.$store.state.owners;
        }
    },
    data: function() {
        return {
            showAddformControl: false,
            showTaskLargeForm: false
        }
    },
    methods: {
        loadConfig: function() {
            this.$store.commit('setConfig', currentConfig);
        },
        loadTasks: function() {
            this.$store.commit('setTasks', tasks);
        },
        loadOwners: function() {
            this.$store.commit('setOwners', owners);
        },
        showAddForm: function() {
            this.showAddformControl = !this.showAddformControl;
        },
        showLargeTaskForm: function() {
            this.showTaskLargeForm = !this.showTaskLargeForm;
        }

    },
    mounted: function() {
        this.loadConfig();
        this.loadTasks();
        this.loadOwners();
    }
}
</script>

<style>
 body {
     margin: 0;
     padding: 0;
 }

    #app {
        margin: 0;
        padding: 0;
    }
</style>
