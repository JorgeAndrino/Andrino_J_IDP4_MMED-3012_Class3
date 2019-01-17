(() => {
    // create a component first
    const Usercomponent = {
        props: ['name', 'role'],

        template: "#usertemplate",

        created: function() {
          console.log("Hey There Spidey!!")
        },

        methods: {
            logFromChild() {
                console.log("logged from the component");
            },

            passEvent() {
                this.$emit('shoutup');
            }
        }
    };

    // then your vue instance
    const vm = new Vue({
        el: "#app",

        data: {
            testmessage: "Im here"
        },

        methods: {
            calledOnParent() {
                console.log("This method lives in the main VM and was caled from a component");
            }
        },

        created: function() {
            console.log("Hey There Spidey!!")
        },

        components: {
            'activeusers' : Usercomponent
        }
    })
})();