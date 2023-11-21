<template>
    <svg :class="`icon__${nameId}`" v-if="format === 'svg'">
        <use :xlink:href="`icons.svg#${nameId}`"></use>
    </svg>
    <img :src="getImgUrl(nameId)" alt="Some" v-else />
</template>
<script>

function ra(r) {
    r.keys().forEach(r)
}
ra(require.context('../assets/icons', true, /\.svg$/))

export default {
    props: {
        nameId: {
            type: String,
            required: true
        },
        format: {
            type: String,
            required: true
        }
    },

    methods: {
        getImgUrl(pet) {
            const images = require.context('../assets/img', false, /\.png$/)
            return images('./' + pet + ".png")
        }
    }
}
</script>
