<!-- todo: make a reuseable Nav, pass title -->
<template>
    <van-nav-bar
        title="test"
        left-text="Back"
        left-arrow
        @click-left="router.push('/')"
        
    />
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const props = defineProps(["title"]);
    console.log(props.title);
</script>
