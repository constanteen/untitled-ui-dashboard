import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import AppGridBody from "./AppGridBody";
import AppTable from "./AppTable";

export default function AppBody({ open }) {
  const [activeView, setActiveView] = useState("table");

  const toggleView = () => {
    activeView === "table" ? setActiveView("grid") : setActiveView("table");
  }

  return (
    <section className={`${ open ? "app_body_open" : "app_body_close" }`}>
      <div className="d-flex mt-3">
        <Form className="w-50">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className="bg-white ps-4"><i class="bi bi-search"></i></InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              className="p-3 border border-start-0"
            />
          </InputGroup>
        </Form>
        <div className="ms-auto me-5">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" style={{ borderRadius: "50%", width: "50px", height: "50px", objectFit: "cover" }} />
        </div>
      </div>
      <div className="me-5">
        <hr />
      </div>
      <div className="me-5 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <p className="h3">Files <span className="text-primary fs-6" onClick={toggleView}>Toggle</span></p>
          <Button variant="outline-secondary" className="p-3 px-5 rounded-0"><i class="bi bi-arrow-up"></i> Upload</Button>
        </div>
        <div>
          {
            activeView === "table" ? (<AppTable />) : (<AppGridBody />)
          }
        </div>
      </div>
    </section>
  )
}
