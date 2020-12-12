Vue.component('todo-item', {
  props: ['todo'],
  template: '<div><input type="checkbox" class="todo-item-btn" v-on:click="changeStatus"><input class="todo-item item-input" v-model:value="todo.value"><input type="button" value="X" class="rm-btn" v-on:click="removeTodo"></div>',
  methods: {
    changeStatus: function(){
      if(this.todo.status == "todo"){
        this.todo.status = "done"
      }else{
        this.todo.status = "todo"
      }
    },
    removeTodo: function(){
      index = this.$parent.lists.indexOf(this.todo)
      this.$parent.lists.splice(index, 1)
    }
  },
})

var app = new Vue({
  el: "#app",
  data: {
    input_value: "",
    lists: [
      {status:"todo", value:"公文送係辦"},
      {status:"done", value:"git作業"}
    ]
  },
  methods:{
    newToDo: function(){
      this.lists.push({status:'todo', value:this.input_value})

      this.input_value = ""
    },

  },
})