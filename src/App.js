import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as signalR from "@microsoft/signalr";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
  const hubUrl = "some url...";
  const hubProtocol = "some protocol...";
  const [hubConnection, setHubConnection] = useState(null);

  console.log("app: ", signalR);

  useEffect(() => {
    // Det här körs när appen laddas första gången.

    return; // <-- Ta bort den här efter att du lagt in url/protocol.
    const connection = signalR
      .HubConnectionBuilder()
      .withUrl(hubUrl)
      .withHubProtocol(hubProtocol)
      .build();

    connection
      .start()
      .then(() => {
        console.info("SignalR started.");
        setHubConnection(connection);
      })
      .catch((error) => {
        console.warn("Oh no, could not start SignalR. Reason: ", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Main hubConnection={hubConnection} />
      </div>
    </Router>
  );
}

export default App;
