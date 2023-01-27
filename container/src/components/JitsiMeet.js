import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Jitsi from "react-jitsi";

const JitsiMeet = () => {
  /*
  const [password, setPassword] = useState("");
  const [onCall, setOnCall] = useState(false);
  let { room } = useParams();
  const [roomName, setRoomName] = useState(room || "");
*/
  let { username } = useParams();
  const [displayName, setDisplayName] = useState(username || "Guest");

  return (
    <div
      style={{
        marginTop: 80,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Jitsi
        roomName={"rm83183bfsmt"}
        displayName={displayName}
        loadingComponent={() => <div>Loading Meeting...</div>}
        onAPILoad={(JitsiMeetAPI) =>
          console.log("Good Morning everyone!", JitsiMeetAPI)
        }
        config={{
          prejoinPageEnabled: false,
          disableDeepLinking: true,
          transcribingEnabled: true,
        }}
        interfaceConfig={{
          APP_NAME: "Cotes Chat",
          SHOW_PROMOTIONAL_CLOSE_PAGE: false,
          SHOW_JITSI_WATERMARK: false,
          SHOW_BRAND_WATERMARK: false,
          DISABLE_TRANSCRIPTION_SUBTITLES: false,
          LANG_DETECTION: true,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "closedcaptions",
            "desktop",
            "fullscreen",
            "fodeviceselection",
            "hangup",
            "profile",
            "info",
            "chat",
            "recording",
            "livestreaming",
            "etherpad",
            "sharedvideo",
            "settings",
            "raisehand",
            "videoquality",
            "filmstrip",
            "invite",
            "feedback",
            "stats",
            "shortcuts",
            "tileview",
            "videobackgroundblur",
            "download",
            "help",
            "mute-everyone",
          ],
          TOOLBAR_ALWAYS_VISIBLE: true,
        }}
      />
    </div>
  );
};
export default JitsiMeet;
