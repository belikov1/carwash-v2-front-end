<template>
    <div>
        <DefaultMenuComponent v-if="show1">

        </DefaultMenuComponent>

        <MobileMenuComponent v-if="show2">
        </MobileMenuComponent>

    </div>
</template>

<script>
    import DefaultMenuComponent from './ComponentMenu/DefaultMenuComponent'
    import MobileMenuComponent from './ComponentMenu/MobileMenuComponent'

    export default {
        name: "menu-component",
        components: {
            DefaultMenuComponent: DefaultMenuComponent,
            MobileMenuComponent: MobileMenuComponent,
        },
        data() {
            return {
                show1: true,
                show2: true,
            }
        },
        methods: {
            currentWindow: function () {
                if (document.documentElement.clientWidth < 813) {
                    this.show1 = false;
                    this.show2 = true;
                } else {
                    this.show2 = false;
                    this.show1 = true;
                }
            }
        },
        created() {
            this.currentWindow();
            window.addEventListener("resize", this.currentWindow);
        }
    }
</script>

<style scoped>

</style>
