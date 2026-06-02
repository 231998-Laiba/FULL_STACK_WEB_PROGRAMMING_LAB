import "./App.css";

// Greeting Component
function Greeting(props) {

  let message = "";

  if (props.timeOfDay === "morning") {
    message = "Good Morning 🌅";
  } 
  else if (props.timeOfDay === "afternoon") {
    message = "Good Afternoon ☀️";
  } 
  else if (props.timeOfDay === "evening") {
    message = "Good Evening 🌙";
  } 
  else {
    message = "Hello 👋";
  }

  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <h2>{message}</h2>
      <p><b>Name:</b> {props.name}</p>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="container">

      <h1>Dynamic Greeting App</h1>

      <Greeting
        name="Ali"
        timeOfDay="morning"
        bgColor="#d1f7c4"
      />

      <Greeting
        name="Ayesha"
        timeOfDay="afternoon"
        bgColor="#ffeaa7"
      />

      <Greeting
        name="Musharaf"
        timeOfDay="evening"
        bgColor="#c4e1f7"
      />

    </div>
  );
}

export default App;