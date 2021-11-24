import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';

const MyNotes = () => {
    let notes = ['apple', 'dfsjkdbv fdv', 'dfsvgsfdbdgb', 'dfbvgsdfb'];
    return (
        <>
            <MainScreen tittle={'Welcome back Wenodh...'}>
                <Link to="createnote">
                    <Button
                        style={{ marginLeft: 10, marginBottom: 6 }}
                        size="lg"
                    >
                        Create New Note
                    </Button>{' '}
                </Link>
                {notes.map((note) => (
                    <Accordion>
                        <Card>
                            <Card.Header
                                // text="primary"
                                style={{ display: 'flex' }}
                            >
                                <span
                                    style={{
                                        textDecoration: 'none',
                                        flex: 1,
                                        cursor: 'pointer',
                                        alignSelf: 'center',
                                        fontSize: 20,
                                    }}
                                >
                                    <Accordion.Toggle
                                        as={Card.Text}
                                        variant="link"
                                        eventKey="0"
                                    >
                                        {' '}
                                        {note}
                                    </Accordion.Toggle>
                                </span>

                                <div>
                                    {' '}
                                    <Button>Edit</Button>
                                    <Button variant="danger" className="mx-2">
                                        Delete
                                    </Button>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <h4>
                                        <Badge pill bg="success">
                                            Success
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>content</p>
                                        <footer className="blockquote-footer">
                                            Created on date
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))}
            </MainScreen>
        </>
    );
};

export default MyNotes;
