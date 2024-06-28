<template>
    <div class="feed">
        <Header title="Feed">
            <template #left>
                <router-link @click="exit" class="feed__link" :to="{name: 'login'}">Back</router-link>
            </template>
            <template #right>
                <router-link class="feed__link" :to="{name: 'login'}">Filter</router-link>
            </template>
        </Header>
        
        <Input type="text" placeholder="Search"  />

    </div>
</template>
<script lang="ts">

import { component, field, prop } from "@/dsl";
import SvgIcon from '@/components/SvgIcon.vue'
import { Header } from "@/widgets";
import { useAuth } from "@/app/providers/store";
import {mapActions} from 'pinia'
import { Input } from "@/shared";


@component
class Feed  {

    components = {
        SvgIcon,
        Header,
        Input
    }

    constructor() {
        Object.assign(this, {
                actions: {...mapActions(useAuth, ['logout'])}
            })
    }

    exit() {
        this.logout().then(() => {
            this.$router.push({name: 'auth'})
        })
    }

}

export default Feed.component


</script>
<style lang="scss">

    @include b(feed) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        gap: 12px;
        height: 100%;

       & input {
            border-radius: 50px;
            padding: 10px 15px;
       }
    }
    
</style>