import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {user.username}
                    </Card.Text>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard