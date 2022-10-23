import { Button, Card, Col, Container, Row } from "react-bootstrap";
import folderImg from "../assets/folder.png"
import pdfImg from "../assets/pdf.png"

export default function AppGridBody() {
  return (
    <Container className="mt-4">
      {[0, 1].map((id) => (<Row className="my-4" key={id}>
        {/* 1 */}
        <Col>
          <Card className="rounded-0" style={{ backgroundColor: "#E0E0E0", maxHeight: "300px", minHeight: "270px" }}>
            <Card.Img className="rounded-0 folder_img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" />
            <Card.Body className="text-center">
              <Card.Title className="py-2">{"My Photo"}</Card.Title>
              <Button className="rounded-0" variant="outline-secondary"><i class="bi bi-arrow-down"></i> &nbsp; Download</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* 2 */}
        <Col>
          <Card className="rounded-0" style={{ backgroundColor: "#E0E0E0", maxHeight: "300px", minHeight: "270px" }}>
            <Card.Img className="rounded-0 folder_img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" />
            <Card.Body className="text-center">
              <Card.Title className="py-2">{"index.html"}</Card.Title>
              <Button className="rounded-0" variant="outline-secondary"><i class="bi bi-arrow-down"></i> &nbsp; Download</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* 3 */}
        <Col>
          <Card className="rounded-0 d-flex align-items-center" style={{ backgroundColor: "#E0E0E0", maxHeight: "300px", minHeight: "270px" }}>
            <div className="d-flex align-items-center" style={{ backgroundColor: "#E0E0E0", maxHeight: "150px", minHeight: "150px" }}>
              <Card.Img className="rounded-0 folder_icon" src={pdfImg} />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="py-2">{"Resume"}</Card.Title>
              <Button className="rounded-0" variant="outline-secondary"><i class="bi bi-arrow-down"></i> &nbsp; Download</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* 4 */}
        <Col>
          <Card className="rounded-0 d-flex align-items-center" style={{ backgroundColor: "#E0E0E0", maxHeight: "300px", minHeight: "270px" }}>
            <div className="d-flex align-items-center" style={{ backgroundColor: "#E0E0E0", maxHeight: "150px", minHeight: "150px" }}>
              <Card.Img className="rounded-0 folder_icon" src={folderImg} />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="py-2">{"Music"}</Card.Title>
              <Button className="rounded-0" variant="outline-secondary"><i class="bi bi-arrow-down"></i> &nbsp; Download</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* 5 */}
        <Col>
          <Card className="rounded-0  d-flex align-items-center" style={{ backgroundColor: "#E0E0E0", maxHeight: "300px", minHeight: "270px" }}>
            <div className="d-flex align-items-center" style={{ backgroundColor: "#E0E0E0", maxHeight: "150px", minHeight: "150px" }}>
              <Card.Img className="rounded-0 folder_icon" src={pdfImg} />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="py-2">{"Student Result"}</Card.Title>
              <Button className="rounded-0" variant="outline-secondary"><i class="bi bi-arrow-down"></i> &nbsp; Download</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>))}
    </Container>
  )
}
