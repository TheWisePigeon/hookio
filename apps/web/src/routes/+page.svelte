<script anyscript lang="ts" >
    import { browser } from '$app/environment';
    import Header from '../../../../packages/shared/Header.svelte';
    import { io } from "socket.io-client"
    const ws = io("ws://localhost:3000")
    
    function breh(){
        ws.emit("hellow", "bozo")
    }
    
</script>



<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Header/>

<button on:click={breh} >
    emit event
</button>