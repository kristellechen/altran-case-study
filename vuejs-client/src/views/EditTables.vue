<template>
    <div>
        <div class='row'>
            <div class='col-4'>Keywords</div>
            <div class='col-4'>Services</div>
            <div class='col-4'>Engagement Types</div>
        </div>
        <div class='row mb-1'>
            <div class='col-4'>
                <b-input-group prepend="New Keyword">
                    <b-form-input v-model='newKeyword'></b-form-input>
                    <b-input-group-append>
                        <b-btn variant="info" :disabled='!canAddKeyword' @click.prevent='onAddKeyword'>Add</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </div>
            <div class='col-4'>
                <b-input-group prepend="New Service">
                    <b-form-input v-model='newService'></b-form-input>
                    <b-input-group-append>
                        <b-btn variant="info" :disabled='!canAddService' @click.prevent='onAddService'>Add</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </div>
            <div class='col-4'>
                <b-input-group prepend="New Engagement Type">
                    <b-form-input v-model='newEngagementType'></b-form-input>
                    <b-input-group-append>
                        <b-btn variant="info" :disabled='!canAddEngagementType' @click.prevent='onAddEngagementType'>Add</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </div>
        </div>
        <div class='row'>
            <div class='col-4'>
                <b-list-group>
                    <b-list-group-item class='d-flex justify-content-between align-items-center' v-for='(item, index) in keywords'
                        :key='index'>
                        {{item.name}}
                        <b-btn class='btn-sm btn-light' @click.prevent='onDeleteKeyword(item._id)'><i class='fas fa-trash-alt'></i></b-btn>
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class='col-4'>
                <b-list-group>
                    <b-list-group-item class='d-flex justify-content-between align-items-center' v-for='(item, index) in services'
                        :key='index'>
                        {{item.name}}
                        <b-btn class='btn-sm btn-light' @click.prevent='onDeleteService(item._id)'><i class='fas fa-trash-alt'></i></b-btn>
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class='col-4'>
                <b-list-group>
                    <b-list-group-item class='d-flex justify-content-between align-items-center' v-for='(item, index) in engagementTypes'
                        :key='index'>
                        {{item.name}}
                        <b-btn class='btn-sm btn-light' @click.prevent='onDeleteEngagementType(item._id)'><i class='fas fa-trash-alt'></i></b-btn>
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edittables',
        data() {
            return {
                newKeyword: '',
                newEngagementType: '',
                newService: ''
            }
        },
        computed: {
            services() {
                return this.$store.state.services
            },
            keywords() {
                return this.$store.state.keywords
            },
            engagementTypes() {
                return this.$store.state.engagementTypes
            },
            canAddKeyword() {
                return (this.newKeyword && this.newKeyword.length > 3) ? true : null
            },
            canAddService() {
                return (this.newService && this.newService.length > 3) ? true : null
            },
            canAddEngagementType() {
                return (this.newEngagementType && this.newEngagementType.length > 3) ? true : null
            }
        },
        methods: {
            onAddService: function () {
                this.$store.dispatch('addService', this.newService)
                this.newService = null
            },
            onAddKeyword: function () {
                this.$store.dispatch('addKeyword', this.newKeyword)
                this.newKeyword = null
            },
            onAddEngagementType: function () {
                this.$store.dispatch('addEngagementType', this.newEngagementType)
                this.newEngagementType = null
            },
            onDeleteService: function (id) {
                this.$store.dispatch('deleteService', id)
            },
            onDeleteKeyword: function (id) {
                this.$store.dispatch('deleteKeyword', id)
            },
            onDeleteEngagementType: function (id) {
                this.$store.dispatch('deleteEngagementType', id)
            }
        },
    }
</script>

<style scoped>
    /* .list-group {
        max-height: 600px;
        margin-bottom: 10px;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    } */
</style>