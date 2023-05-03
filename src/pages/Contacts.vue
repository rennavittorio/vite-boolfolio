<template>

    <Default>

        <h3 class="mb-3">
            My Contacts
        </h3>

        <ul class="p-0">
            <li
            v-for="contact in contacts" :key="contact"
            >
                <span class="badge bg-warning">{{ contact.type }}: </span> <span>{{ contact.info }}</span>

            </li>
        </ul>

    </Default>


</template>
<script>
import Default from '../layouts/Default.vue';

export default {
    components: {
        Default,
    }, 
    data(){
        return {
            contacts: [
                {
                    info: 'reindev@gmail.com',
                    type: 'mail'
                },
                {
                    info: '+393333333333',
                    type: 'phone'
                },
                {
                    info: 'www.reindev.com',
                    type: 'website'
                },
            ]
        }
    }
    
}
</script>
<style scoped>
    
</style>