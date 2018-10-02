<template>
    <div>
        <Toasted href='toasted' />
        <div class='myContainer'>
            <div class='card'>
                <div class='card-header'>Update Case Study</div>
                <div class='card-body'>
                    <Study v-bind:studyProp='study' @onCanSubmit='doCanSubmit'></Study>
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
                            <b-button class='btn-success' :disabled='!canSubmit' @click.prevent='updateCaseStudy' >Submit</b-button>
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
                hasError: false,
                canSubmit: true,
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
                }).catch(err => {
                    this.$toasted.show(err.message, toastrOpts)
                })
            },
            doCanSubmit: function (payload) {
                this.canSubmit = payload
            }
        }
    }
</script>

<style scoped>
    .myContainer {
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 150px;
    }
</style>