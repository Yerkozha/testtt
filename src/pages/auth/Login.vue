<template>
        
    <div class="auth">
        <div class="auth__top">

            <Header title="Log In">
                
            </Header>
            
            <Input type="text" placeholder="Email"  />
            <Input type="password" placeholder="Password" :secret="true" />

        </div>
        
        <div class="auth__bottom">
            <button @click="authProcess" class="auth__bottom-btn">Log In</button>
            <router-link :to="{name: 'main'}">Forgot your password?</router-link>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>

<script lang="ts">

import {component, prop, field } from '@/dsl'
import {Input} from '@/shared'
import { useAuth } from '@/app/providers/store'
import { mapWritableState, mapActions } from 'pinia'
import { useRouter } from 'vue-router';
import { Header } from '@/widgets';
@component
class Login {
    components = {
        Input,
        Header
    }
    
    constructor(){
        Object.assign(
            this, 
            {
                actions: {...mapActions(useAuth, ['login'])}
            }, 
            {
                computed: {...mapWritableState(useAuth, ['token'])}
            }
        )
    }

    authProcess() {
        this.login({username: 'yerkozha',password: '123'}).then(() => {
            this.$router.push({name: 'main'})
        })
    }
    
}


export default Login.component

</script>

