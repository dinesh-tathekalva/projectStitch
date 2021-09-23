import React, { useState } from 'react';
import { Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import PostCard from './PostCard';

const PostsPagination = (props) => {
    const { posts, handleDeleteClick, handleUpdateClick, updateEmailId } = props;
    const [currentPage, setCurrentPage] = useState(0)
    const handleClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    }
    const pageSize = 20
    const pagesCount = Math.ceil(posts.length / pageSize);
    const slicedPosts = posts.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize)
    return (
        <>
            <div className="pagination-wrapper" style={{ marginLeft: '4em' }}>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink
                            onClick={e => handleClick(e, currentPage - 1)}
                            previous
                            href="#"
                        />
                    </PaginationItem>
                    {[...Array(pagesCount)].map((page, i) =>
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => handleClick(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    <PaginationItem disabled={currentPage >= pagesCount - 1}>
                        <PaginationLink
                            onClick={e => handleClick(e, currentPage + 1)}
                            next
                            href="#"
                        />
                    </PaginationItem>
                </Pagination>
            </div>
            <Container>
                <Row className="mb-3 mt-3">
                    {slicedPosts
                        .map((post, i) => {
                            console.log(post, "post");
                            return (
                                <PostCard key={post.id} id={post.id} name={post.name}
                                    email={post.email} body={post.body} handleDeleteClick={handleDeleteClick}
                                    handleUpdateClick={handleUpdateClick} updateEmailId={updateEmailId} />
                            )
                        }
                        )}
                </Row>
            </Container>
        </>
    )
}

export default PostsPagination