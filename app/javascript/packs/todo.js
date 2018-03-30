import Vue from 'vue'

(function() {
    var likeComponent = Vue.extend({
        props: {
            message: {
              type: String,
              default: 'Like'
            }
          },
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">{{ message }} {{ count }}</button>',
        methods: {
            countUp: function() {
                this.count++
                this.$emit('increment')
            }
        }
    })

    new Vue({
        el: '#like-app',
        components: {
            'like-component': likeComponent
        },
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function() {
                this.total++
            }
        }
    })

    new Vue({
        el: '#todo',
        data: {
        newItem: '',
        todos: []
        },
        watch:{
            todos: {
                handler: function(){
                    localStorage.setItem('todos', JSON.stringify(this.todos))
                },
                deep: true
            }
        },
        mounted:function() {
            this.todos = JSON.parse(localStorage.getItem('todos')) || []
        },
        methods: {
            addItem: function() {
                var item = {
                title: this.newItem,
                isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function(index) {
                if (confirm('are you sure?')) {
                this.todos.splice(index, 1);
                }
            },
            purge: function() {
                if (!confirm('deleted finished?')) {
                    return;
                }
                this.todos = this.remaining;
            }
        },
        computed: {
            remaining: function() {
                return this.todos.filter(function(todo) {
                    return !todo.isDone;
                });
            }
        }
    });
})();