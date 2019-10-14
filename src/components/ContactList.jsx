import React from "react";
import Contact from "./Contact";

const users = [{
        gender: "male",
        name: "Harry Shaw",
        location: "9278 new road",
        email: "brad.gibson@example.com",
        registered: "2002-05-21T10:59:49.966Z",
        phone: "011-962-7516",
        cell: "081-454-0666",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
        nat: "IE",
        status: false
},
  ,
  {
        gender: "femel",
        name:"Ruby Davidson",
        location:  "9278 new road",
        email: "brad.gibson@example.com",
        registered: "2002-05-21T10:59:49.966Z",
        phone: "011-962-7516",
        cell: "081-454-0666",
        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
        nat: "IE",
        status: true
      }
    ,
  

  {
        gender: "male",
        name: "Brad Gibson",
        location:"9278 new road",
        email: "brad.gibson@example.com",
        registered: "2002-05-21T10:59:49.966Z",
        phone: "011-962-7516",
        cell: "081-454-0666",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        nat: "IE",
        status: true
      }
    ,
  
  {
        gender: "femel",
        name: "Scarlett Henry",
        location: "9278 new road",
        email: "brad.gibson@example.com",
        registered:"2002-05-21T10:59:49.966Z",
        phone: "011-962-7516",
        cell: "081-454-0666",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        nat: "IE",
        status: false
      }
    ,
  
  {

        gender: "male",
        name: "Ricardo Roberts",
        location:  "9278 new road",
        email: "brad.gibson@example.com",
        registered: "2002-05-21T10:59:49.966Z",
        phone: "011-962-7516",
        cell: "081-454-0666",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        nat: "IE",
        status: true
      }
    ,
];
const ContactList = () => (
    <div>
        {users.map(item => (
    <Contact name={item.name} avatar={item.avatar} status={item.status}/>
        ))}
    </div>
)

export default ContactList