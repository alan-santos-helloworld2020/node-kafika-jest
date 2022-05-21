var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'quickstart-events', partition: 0,offset:0 }
        ],
        {
            autoCommit: false
        }
    );
    var msg=[]
    consumer.on("message",(message)=>{
        msg.push(message);
    })

module.exports=msg;