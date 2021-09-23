import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setData } from '../actions/actions';
import { useState } from 'react';
import PostsPagination from './PostsPagination'
import { Container, Row } from 'reactstrap'

const PostLists = () => {
    let posts = useSelector(state => state.projectRedc.data)
    const dispatch = useDispatch()

    // Fetching the data 
    const fetchData = async () => {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/comments").then(result => result.data)
            .catch(err => {
                console.log(err)
            })
        dispatch(setData(response))
    }

    // Delete the card
    const handleDeleteClick = (event) => {
        const id = event.target.id
        axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, { body: "Hello", email: "HELLO@sydney.com", id: 2, name: "HELLOS", postId: "2" })
            .then(result => result.data)
            .catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line
        const newPosts = posts.filter(post => post.id != id)
        newPosts.push()
        dispatch(setData(newPosts))
    }

    // Updating the email field
    const [newEmail, setNewEmail] = useState()
    const updateEmailId = updatedEmail => {
        return setNewEmail(updatedEmail)
    }

    const handleUpdateClick = event => {
        let id = event.target.id
        // eslint-disable-next-line
        let filteredPost = posts.filter(post => post.id == id)
        if (newEmail) {
            filteredPost[0].email = newEmail
            setNewEmail()
        }
        axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, filteredPost[0])
            .then(result => {
                // eslint-disable-next-line
                const newPosts = posts.filter(post => post.id != id)
                newPosts.push(result.data)
                function sortByProperty(property) {
                    return function (a, b) {
                        if (a[property] > b[property])
                            return 1;
                        else if (a[property] < b[property])
                            return -1;

                        return 0;
                    }
                }
                newPosts.sort(sortByProperty("id"));
                dispatch(setData(newPosts))
            }
            )
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <h1 className="my-3 text-muted">Bulletin Board</h1>
            <Container>
                <Row className="mb-3 mt-3">
                    <PostsPagination posts={posts} handleDeleteClick={handleDeleteClick} handleUpdateClick={handleUpdateClick} updateEmailId={updateEmailId} />
                </Row>
            </Container>
        </>
    )
}

export default PostLists