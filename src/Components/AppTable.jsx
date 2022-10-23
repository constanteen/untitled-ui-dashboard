import { Table } from "react-bootstrap";

export default function AppTable() {
  const tables = [
    {
      id: "1",
      icon: <i class="bi bi-image-fill"></i>,
      title: "My Photo",
      type: "PNG File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "2",
      icon: <i class="bi bi-folder-fill"></i>,
      title: "Music",
      type: "Zip File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "3",
      icon: <i class="bi bi-file-code-fill"></i>,
      title: "Index",
      type: "HTML",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "4",
      icon: <i class="bi bi-file-earmark-fill"></i>,
      title: "Result",
      type: "PDF File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
    {
      id: "5",
      icon: <i class="bi bi-image-fill"></i>,
      title: "Mum Pic",
      type: "PNG File",
      time: "10/7/2022 10:16AM",
      size: "0.99MB"
    },
  ]

  return (
    <div>
      <Table hover responsive>
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
                <td className="fw-bold py-4">{row.icon} &nbsp; {row.title}</td>
                <td className="py-4">{row.type}</td>
                <td className="py-4">{row.time}</td>
                <td className="py-4">{row.size}</td>
                <td className="py-4">
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
