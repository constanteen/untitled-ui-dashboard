import { Table } from "react-bootstrap";

export default function AppTable() {
  const tables = [
    {
      id: "1",
      icon: <i class="bi bi-file-earmark-person-fill"></i>,
      title: "My Photo",
      type: "PNG File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "2",
      icon: <i class="bi bi-file-earmark-person-fill"></i>,
      title: "Music",
      type: "Zip File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "3",
      icon: <i class="bi bi-file-earmark-person-fill"></i>,
      title: "Index",
      type: "HTML",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "4",
      icon: <i class="bi bi-file-earmark-person-fill"></i>,
      title: "Result",
      type: "PDF File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "5",
      icon: <i class="bi bi-file-earmark-person-fill"></i>,
      title: "Mum Pic",
      type: "PNG File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
  ]

  return (
    <div>
      <Table hover>
        <thead>
          <tr className="fw-light" style={{ color: "#BDBDBD" }}>
            <th className="fw-normal">Name</th>
            <th className="fw-normal">Type</th>
            <th className="fw-normal">Date / Time</th>
            <th className="fw-normal">Size</th>
            <th className="fw-normal"></th>
          </tr>
        </thead>
        <tbody className="py-4">
          {
            tables.map((row) => (
              <tr key={row.id}>
                <td className="fw-bold">{row.icon} {row.title}</td>
                <td>{row.type}</td>
                <td>{row.time}</td>
                <td>{row.size}</td>
                <td>
                  <i class="bi bi-three-dots-vertical"></i>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
  </div>
  )
}
