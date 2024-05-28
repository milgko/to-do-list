import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>

            <assignment-list :assignments="completedAssignments" title="Complete"></assignment-list>
        
        
            <assignment-create @add="addNewAssignment"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [],
        }
    },

    created(){
        fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(data => {
            this.assignments = data})
    },

    computed: {

        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }

    },

    methods: {
        addNewAssignment(name){

            if(name.length === 0) {

                return;

            }

            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
                tag: 'sae related'
            })
        
        }
    }
}