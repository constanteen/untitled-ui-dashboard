import { Nav, Offcanvas } from 'react-bootstrap'

export default function Sidebar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} backdrop={false} style={{ backgroundColor: "#F2F2F2"}}>
      <Offcanvas.Header closeButton className="p-5">
        <Offcanvas.Title className="text-center">Untitled Ui</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="ms-5 me-3">
        <div className='d-flex justify-content-center p-3 bg-white align-items-center nav_selected_item'>
          <p className='mb-0'><i className="bi-clipboard2-fill me-3"></i>File Manager</p>
        </div>
        <div className='mt-5'>
          {
            [0, 1, 2, 3].map((el) => (
              <div key={el} className='d-flex my-5'><div className="nav-circle me-3"></div><div className="nav-rectangle"></div></div>
            ))
          }
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
