export const handelError=(statusCode,message)=>{
    const error= new Error();
    error.statusCode=statussCode;
    error.messege=message;
    return error;
}