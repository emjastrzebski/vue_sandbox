<template>
    <ul class="task-list fl">
        <h3>{{ title }}</h3>
        <SmallTask v-for="task in tasks" :key="task.id" v-bind:task="task" @deleteTask="deleteTaskById"/>
    </ul>
</template>

<script>

    import SmallTask from "./SmallTask.vue"

    export default {
        name: "TasksList",
        components: {
            SmallTask
        },
        props: ["title", "tasks"],
        data: function() {
            return {

            }
        },
        computed: {
            tasksA: function() {
                return this.tasks;
            }
        },
        methods: {
            deleteTaskById(payload) {
                alert("delete " + payload.id);
            }

        }
    };

</script>

<style scoped>

    .fl {
        float: left;
    }

    .task-list {
        position: relative;
        width: 350px;
        height: 100%;
        min-height: 300px;
        max-height: 700px;
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
        /*overflow-y: scroll;*/
    }

    ul {
        display: block;
        list-style: none;
        padding: 0;
        margin: 0;
        z-index: 490;
        overflow: hidden;
    }

    ul li {
        border: 1px solid red;
        display: block;
        min-height: 100px;
        padding: 0;
        margin: 0;
        margin-bottom: 5px;
        z-index: 500;
    }
</style>