<template>
    <div>
        <h2>Update an existing project</h2>
        <Study v-bind:study='study'></Study>
    </div>
</template>

<script>
    import Study from '@/components/Study.vue'

    export default {
        name: 'updateproject',
        props: ['study'],
        components: {
            Study
        }
    }
</script>