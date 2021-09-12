import * as AWS from 'aws-sdk';

var DoClient = new AWS.DynamoDB.DocumentClient();

type Student = {
    StudentId: String,
    StudentName: String,
    StudentClass: Number,
}

type AppsyncEvent = {
    info:{
        TypeName: String
    },
    args: {
        StudentID: Number,
        student: Student
    }
}

exports.handler = async (event: AppsyncEvent)=>{

    const params = {
        tableName: process.env.TableName,
        Item: event.args.student
    }

    if(event.info.TypeName === 'GetStudents'){
        
        DoClient.get(params, function(err, data) {
            if (err) {
                console.log('ERROR in Fetching Data')
            } else {
                return data
            }
        });
    

    }
    else if(event.info.TypeName === 'AddStudent'){
        
        try{
            await DoClient.put(params)
            return 'Data Updated'
        }
        catch{
            console.log('Failed')
        }

    }
}