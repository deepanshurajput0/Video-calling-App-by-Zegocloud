import React from "react";
import { useParams } from "react-router-dom";
import { appId, serversecret } from "../helper";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
  const { id } = useParams();
  const myMeeting = async (element) => {
    const appID = appId;
    const serverSecret = serversecret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
       Date.now().toString(),
      "Deepanshu Verma" 
    );
  // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
   zp.joinRoom({
    container: element,
    sharedLinks:[
        {
         name: "Copy Link",
         url:`http://localhost:3000/room/${id}` 
        }
    ],
    scenario:{
        mode:ZegoUIKitPrebuilt.OneONoneCall
    } 
   })
  };
  return <div >
    <div ref={myMeeting} />
  </div>;
};

export default Room;
