export default {
    template: `
        <button 
            :class="{
                'border rounded px-3 py-2 disabled:cursor-not-allowed' : true,
                'bg-blue-500 hover:bg-blue-700' : type === 'primary',
                'bg-yellow-500 hover:bg-yellow-700' : type === 'warning'
            }"
            :disabled="processing"    
        >

            <slot />

        </button>
        `,

    props: {
        processing: {
            type: Boolean,
            default: false
        },

        type: {
            type: String,
            default: 'primary'
        }
    },
}