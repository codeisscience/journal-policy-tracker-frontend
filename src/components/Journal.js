import React from 'react'
import { Col, Row, Container, Table } from 'react-bootstrap'

const Journal = () => {
  return (
    <Container>
      <h1>Journals</h1>
      <Row>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Author</th>
                <th>Title</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Yo</td>
                <td>Yehudi</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pritish</td>
                <td>Samal</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Yo</td>
                <td>Yehudi</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Pritish</td>
                <td>Samal</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Yo</td>
                <td>Yehudi</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Pritish</td>
                <td>Samal</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Yo</td>
                <td>Yehudi</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Yo</td>
                <td>Yehudi</td>
                <td>2021</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Journal
