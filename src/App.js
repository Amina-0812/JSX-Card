import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Picture";
import iPhone from "./iPhone.jpg";
import Card from "react-bootstrap/Card";

function App() {
  const firstName = "Amina";
  return (
    <div className="App">
      <Card style={{ width: "25rem", flexDirection : "flex"}} >
        <Card.Body >
        <Image/>
          <Card.Title className="mt-5">
            <Name/>
          </Card.Title> 
          <Card.Text style={{background: "lightPink"}}>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="greeting-card" style={{fontWeight : "inherit"}}>
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && <img src={iPhone} alt="User" style={{ width: "200px", height: "auto" }} />}
      </div>
    </div>
  );
}

export default App;
