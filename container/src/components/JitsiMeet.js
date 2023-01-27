import React, { useState } from "react";
import Jitsi from "react-jitsi";

const JitsiMeet = ({ match }) => {
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [onCall, setOnCall] = useState(false);

  const room = match?.params?.room || "";
  const [roomName, setRoomName] = useState(room);

  return (
    <div
      style={{
        marginTop: 80,
        marginLeft: 400,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      {onCall ? (
        <Jitsi
          roomName={roomName}
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
      ) : (
        <>
          <h1>Crate a Meeting</h1>
          <input
            type="text"
            placeholder="Room name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <button onClick={() => setOnCall(true)}> Let&apos;s start!</button>
        </>
      )}
    </div>
  );
};
export default JitsiMeet;
