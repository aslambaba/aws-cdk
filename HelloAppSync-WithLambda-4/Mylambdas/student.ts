import { Handler } from "@aws-cdk/aws-lambda";

type AppSyncObj = {
    info: {
        fieldName: String,
    },
    arguments:{
        msg: String,
    }
}

exports.handler = (event:AppSyncObj)=>{
    if(event.info.fieldName == 'name'){
        return 'Hello Aslam Baba'
    }
    else if(event.info.fieldName == 'messege'){
        return `Your Messege is ${event.arguments.msg}`
    }
    else{
        return 'Not Record Found'
    }
}