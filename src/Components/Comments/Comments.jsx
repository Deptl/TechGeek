import React from 'react'
import { Comment } from '../../reviews'
import './Comments.css'

export const Comments = () => {
    return (
        <div className="reviews-container">
            <h2>Reviews</h2>
            <div className="review-card">
                {Comment.map((comment) => (
                    <div className='review-content'>
                        <p><b>Review:</b> {comment.review}</p>
                        <p><b>Ratings:</b> {comment.ratings}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
