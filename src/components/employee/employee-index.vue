<template>
    <div id="index-pekerja">
        <navbar></navbar>
        <vue-headful title="Pekerja" description="" />
        <h1>Workspace Data Pekerja</h1>
        <div>
            <b-tabs @input="changedTabIndex" v-model="tabIndex" content-class="mt-3" fill>
                <b-tab v-for="tab in tabs" v-bind:key="tab"
                    v-bind:class="['tab-button', { active: currentTab === tab }]" v-on:click="currentTab = tab">
                    <template v-slot:title>{{tab}}</template>
                    <div>
                        <component v-bind:is="currentTabComponent" class="tab"></component>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>
<script>
    import navbar from "@/components/frame/navbar.vue"
    import listEmp from "@/components/employee/employee-list.vue"
    import advEmp from "@/components/employee/employee-advanced.vue"
    import createEmp from "@/components/employee/employee-create.vue"
    export default {
        data() {
            return {
                currentTab: "List Pekerja",
                tabs: ["List Pekerja", "Pekerja Baru", "Lanjutan"],
                tabIndex: 0,
            }
        },
        created() {
            if (this.tabIndex == 0) {
                let currentRoute = this.$router.currentRoute
                if (currentRoute.path == "/employee") {
                    console.log("aisdih")
                }
                //this.$router.push({ name: 'Home', query: { redirect: '/' } })
            }
        },
        methods: {
            changedTabIndex() {
                console.log(this.tabIndex)
            }
        },
        computed: {
            currentTabComponent: function () {
                return "tab-" + this.currentTab.toLowerCase().split(' ').join('');
            }
        },

        components: {
            navbar,
            "tab-listpekerja": listEmp,
            "tab-pekerjabaru": createEmp,
            "tab-lanjutan": advEmp
        }
    }
</script>
<style scoped>

</style>