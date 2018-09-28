<template>
    <div>
        <Toasted href='toasted'/>
        <div class='m-5'>
            <div class='card'>
                <div class='card-header'>Update Case Study</div>
                <div class='card-body'>
                    <Study v-bind:study='study'></Study>
                </div>
                <div class='card-footer'>
                    <div class='d-flex justify-content-between'>
                        <div v-if='hasError'>
                            <div class='text-danger'>{{message}}</div>
                        </div>
                        <div v-else>
                            <div class='text-success'>{{message}}</div>
                        </div>
                        <div>
                            <b-button class='btn-success' @click.prevent='updateCaseStudy'>Submit</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Study from '@/components/Study.vue'
    import server from '@/js/server'

    let toastrOpts = {
        duration: 3000,
        fullWidth: true,
        position: 'top-center'
    }

    export default {
        name: 'updateCaseStudy',
        data() {
            return {
                message: 'hahaha',
                hasError: false
            }
        },
        props: ['study'],
        components: {
            Study
        },
        methods: {
            updateCaseStudy: function () {
                this.$store.dispatch('updateStudy', this.study).then(resp => {
                    this.$toasted.show('Case study updated successfully', toastrOpts)
                }).catch (err => {
                    this.$toasted.show(err.message, toastrOpts)                    
                })
                // server.updateCaseStudy(this.study).then(resp => {
                //     this.hasError = false
                //     this.message = JSON.stringify(resp)
                //     this.$toasted.show('Case study updated successfully', toastrOpts)
                // }).catch (err => {
                //     this.hasError = true
                //     this.message = err.message
                //     this.$toasted.show(err.message, toastrOpts)
                // })
            }
        }
    }
</script>

<style scoped>

</style>