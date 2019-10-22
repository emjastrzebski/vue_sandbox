<template>
    <div>
        <div id="showTaskWindowOverlay" @click.prevent="doCloseReset">
            <div id="taskBg">
                <div id="closeButtonSpacerAndTitle">
                    <div class="button fl" @click.prevent="doCloseReset">X</div>
                    <h2 class="fl">{{ selectedTask.title }}</h2>
                    <div class="clear"></div>
                </div>
                <div id="taskPanelLeft" class="fl">

                    <p>Added: {{ selectedTask.date }} by {{ selectedTask.owner.name }}</p>
                </div>
                <div id="taskPanelRight" class="fl"> --- options --- </div>
                <div class="clear"></div>
                <div id="bottomPane"> --- comments --- </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Task",
        data: function() {
            return {
                'selectedTask': false
            };
        },
        methods: {
            doCloseReset: function() {
                this.$store.commit("doCloseResetTask", {})
            }
        },
        mounted() {
            this.selectedTask = this.$store.getters.getSelectedTask;
        }
    }
</script>

<style scoped>
    #showTaskWindowOverlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 500;
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0;
        padding: 0;
        display: block;
    }
    #taskBg {
        position: relative;
        margin: 0 auto;
        margin-top: 5%;
        margin-right: 0;
        width: 80%;
        min-height: 600px;
        background-color: #FFFFFF;
        border-radius: 30px 0px 0px 30px;
        z-index: 510;
        padding: 15px;
        display: block;
    }
    #closeButtonSpacerAndTitle {
        display: block;
        margin-bottom: 15px;
    }
    #closeButtonSpacerAndTitle h2 {
        margin-top: 0px;
        margin-left: 15px;
    }
    #closeButtonSpacerAndTitle .button {
        display: block;
        border: 1px solid #0000FF;
        border-radius: 15px;
        width: 20px;
        height: 25px;
        background: #0000FF;
        color: #FFFFFF;
        cursor: pointer;
        padding-top: 5px;
        padding-left: 5px;
    }
    #taskPanelLeft {
        display: block;
        margin: 0;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 5px;
        width: 70%;
        height: 100%;
        border: 1px solid black;
    }
    #taskPanelRight {
        display: block;
        margin: 0;
        padding: 5px;
        width: 20%;
        height: 100%;
        border: 1px solid green;
    }
    #bottomPane {
        display: block;
        margin: 0;
        padding: 5px;
        width: 100%;
        height: auto;
        min-height: 100px;
        border: 1px solid blue;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clear {
        clear: both;
    }
</style>