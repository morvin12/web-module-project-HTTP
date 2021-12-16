import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const DeleteMovieModal = (props) => {
    const {push} = useHistory();
    const {id} = useParams();

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:9000/api/movies/${id}`)
        .then(res => {
            props.setMovies(res.data);
            push('/movies')
        })
        .catch(err => console.error(err))
       
    }
    const handleCancel = (e) => {
        e.preventDefault();
        push(`/movies/${id}`)
    }

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                        <button onClick= {handleCancel} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" onClick={handleCancel} className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" onClick ={handleDelete} className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;