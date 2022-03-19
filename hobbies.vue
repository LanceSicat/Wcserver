<template>
    <div id="hobbies">
        <div id="right-info">
            <div class="container">
                <div class="hobbies" role="alert">
                    <ul>
                        <li>{{ l1 }}</li>
                        <li>{{ l2 }}</li>
                        <li>{{ l3 }}</li>
                        <li>{{ l4 }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hobbies',
    data () {
        return {
            l1: 'Biking',
            l2: 'Watching Movie',
            l3: 'Playing Basketball',
            l4: 'Playing Computer Games'
        }
    }
}
</script>