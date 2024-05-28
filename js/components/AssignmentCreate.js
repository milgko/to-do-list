export default {
    template: `<form @submit.prevent="add">
                    <div class="text-black">
                        <input v-model="newAssignment" type="text" placeholder="New assignment..." class="p-2">
                        <button type="submit" class="bg-white p-2 border-l">Add</button>
                    </div>
                </form>`,

    data(){
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){
            

            this.$emit('add', this.newAssignment)

            this.newAssignment = ''
        
        }
    }
}