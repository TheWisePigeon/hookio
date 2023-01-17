<script lang="ts" >
    import Header from "../../../../packages/shared/Header.svelte"
    import { io } from "socket.io-client"
    let socket_client = io("ws://localhost:3000", {
        reconnectionDelayMax:10000
    })

    function socket_me_daddy(){
        try {
            alert("bruh")
            socket_client.emit("some", "thing")
        } catch (error) {
            console.log(error)
        }
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Header/>

<button class=" test " on:click={socket_me_daddy}  >
    Socket me up daddy
</button>

<style>
    .test{
        padding: 5px;
        background-color: bisque;
    }
</style>