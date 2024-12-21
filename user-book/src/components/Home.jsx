import { useEffect } from "react";
import axios from "axios";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";


function Home() {
    let [books, setBooks] = useState([])

    useEffect(() => {
        axios({
            url: "http://localhost:3001/user/books",
            method: "get",

        }).then((res) => {
            console.log(res)
            setBooks(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <Container >
            <Row>

                {
                    books.map((book, i) =>
                        <Col key={i} lg={3} className="mt-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img src={book.bookImage} style={{width: "15rem" , height: "25rem"}} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{book.bookName}</Card.Title>
                                    <Card.Text>Atuthor Name : {book.authorName}</Card.Text>
                                    <Card.Text>{book.bookDescription}</Card.Text>
                                    <div style={{width : "50px ", backgroundColor: "seaGreen", borderRadius: "5px" , color : "white", padding: "10px"}}>4.4 <i class="bi bi-star-fill"></i></div>
                                    <span style={{color: "grey", display: "black"}}>{book.language}, {book.author}</span>
                                    <span style={{fontWeight:'bold'}}>&#x20b9; {book.price}</span>
                                    <Card.Text>Price : {book.price}</Card.Text>
                                    <Card.Text>{book.language}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
export default Home