<template>
    <div>
        <button id="chain"></button>
    </div>
</template>

<script>
import Init from "@/ehereum/dapp"

export default {
    setup() {
        
    },
    mounted() {
       Init();
    // console.log(this.$http)
    //    this.$http.get("FirstContract.json").then(res => {
    //        console.log(res)
    //    })
    },
    methods: {

    }
}
</script>