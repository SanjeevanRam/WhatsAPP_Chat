const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
}

//Insert Data
let allChat=[
    {
    from:"Chetan",
    to:"Mahendra",
    msg:"give me money",
    create_at:new Date(),
    },
    {
        from:"Raju",
        to:"Sanjeevan",
        msg:"To buy a car",
        create_at:new Date(),
        },
        {
            from:"Sambhu",
            to:"Santosh",
            msg:"Send me dues money",
            create_at:new Date(),
            },
            {
                from:"Hema",
                to:"Sanjeevan",
                msg:"Play to cricket",
                create_at:new Date(),
                },
                {
                    from:"Vikrant",
                    to:"Sanjeevan",
                    msg:"Me ziddi hi hu",
                    create_at:new Date(),
                    },
                    {
                        from:"Sanjeevan",
                        to:"Vikrant",
                        msg:"Bakchodi band kr de",
                        create_at:new Date(),
                        },

                        {
                            from:"Chetan",
                            to:"sinjni",
                            msg:"Send me exam sheets",
                            create_at:new Date(),
                            },
                            {
                                from:"Mowgli",
                                to:"Sinjni",
                                msg:"Why you not send me exam sheets",
                                create_at:new Date(),
                                },
                                {
                                    from:"Chetan",
                                    to:"Mowgli",
                                    msg:"Mar khaega tu or Vikrant",
                                    create_at:new Date(),
                                    },

                          
]
Chat.insertMany(allChat);
// chat1.save()
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

