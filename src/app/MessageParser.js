import ActionProvider from "./ActionProvider";

class MessageParser{
    constructor(ActionProvider, state){
        this.ActionProvider = ActionProvider
        this.state = state
    }

    parse = (message) => {
        this.ActionProvider.respond(message)
    }
}

export default MessageParser