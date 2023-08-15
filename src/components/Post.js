import React from 'react'
import Card from './shared/Card'
import { useNavigate, Link, NavLink } from 'react-router-dom'


const Post = () => {
    const navigate = useNavigate()

    const goToAnother = () => {
        navigate('/')
    }

    return (
        <Card>
            <p>Here is the post page...</p>
            <NavLink activeclassname="active" to="/" className="active">Send to About page</NavLink>
            <button onClick={goToAnother}>Click to redirect</button>
        </Card>
    )
}

export default Post
