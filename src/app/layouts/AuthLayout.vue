<template>
    <div class="layout">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">

import { component, field, prop } from "@/dsl";
import SvgIcon from '@/components/SvgIcon.vue'


@component
class AuthLayout  {

    components = {
        SvgIcon
    }

}

export default AuthLayout.component


</script>
<style lang="scss">

   @include b(layout) {
        padding: 0 12px;
        height: 100%;

        @include e(inner){
        }
    }
    
</style>