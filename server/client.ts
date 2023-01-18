try {
    const ws = new WebSocket("ws://localhost:8000")
    ws.onopen = ()=>{
        console.log("connected ")
        try {
            setInterval(() => {
                ws.send("Client says hello")
            }, 10000)
        } catch (error) {
            console.log(error)
        }
    }
    ws.onclose = ()=>{
        console.log("Server closed")
    }

} catch (error) {
    console.log(error)
}