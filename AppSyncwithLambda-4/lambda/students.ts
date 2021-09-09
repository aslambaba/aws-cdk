type AppSyncAPI={
    info:{
        fieldName: string
    },
    args:{
        title: string
    }
}


exports.handler = async(event: AppSyncAPI)=>{

    if(event.info.fieldName === 'students'){
        let student = ["Aslam", "Rehan", "Atta", "Shayan", "Ikram"];
        return student
    }else{
        return ''
    }

}