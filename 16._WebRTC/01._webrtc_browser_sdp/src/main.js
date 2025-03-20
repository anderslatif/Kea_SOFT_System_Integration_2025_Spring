import './style.css';

let localStream;
let remoteStream;
let peerConnection;

const servers = {
  iceServers: [
      {
          urls: ['stun:stun1.l.google.com:19302'],
      }
  ]
};

async function init() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  document.getElementById("localVideo").srcObject = localStream;
}

async function createPeerConnection(sdpOfferTextAreaId) {
  peerConnection = new RTCPeerConnection(servers);

  remoteStream = new MediaStream();
  document.getElementById("remoteVideo").srcObject = remoteStream;


  localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));

  // listen to remote tracks from the peer
  peerConnection.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => remoteStream.addTrack(track));
  };

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      document.getElementById(sdpOfferTextAreaId).textContent = JSON.stringify(peerConnection.localDescription)
    }
  };

}

async function createOffer() {
  if (!localStream) {
    return alert("Local stream is not ready");
  }

  const offer = await createPeerConnection("sdpOfferTextArea");

  // tells WebRTC that a peer wants to start a connection which triggers the ICE candidate gathering for itself
  await peerConnection.setLocalDescription(offer);

}

async function createAnswer() {
    await createPeerConnection("sdpAnswerTextArea");

    let offer = document.getElementById("sdpOfferTextArea").value;
    if (!offer) return alert("Offer is required")
    offer = JSON.parse(offer);

    await peerConnection.setRemoteDescription(offer);

    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    document.getElementById("sdpAnswerTextArea").textContent = JSON.stringify(answer);
}

async function addAnswer() {
  let answer = document.getElementById("sdpAnswerTextArea").value;
  if (!answer) return alert("Answer is required");
  answer = JSON.parse(answer);

  if (!peerConnection.currentRemoteDescription) {
    peerConnection.setRemoteDescription(answer);
  }
}

init();
document.getElementById("createOfferButton").addEventListener("click", createOffer);
document.getElementById("createAnswerButton").addEventListener("click", createAnswer);
document.getElementById("addAnswerButton").addEventListener("click", addAnswer);
