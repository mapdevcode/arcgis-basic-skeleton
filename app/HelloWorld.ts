export function hello(message?: string){
    if(!message){
        message = "World"
    }

    message = "Hello " + message

    return message;
}

export default hello;