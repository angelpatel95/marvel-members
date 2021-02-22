import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom'
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name: string,
    model: string,
    price: number
}

export const UpdateMarvel = () => {

    {/* Set up communication of state via the router location */}
    const location:any =  useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.marvel_id,data)
    }
    return (
        <Container>
            <h1>Update Your Marvel</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"> Marvel Name</label>
                <input type="text" name="name" placeholder="Update Your Character" ref={ register }/>
                
                <label htmlFor="description"> Marvel Description</label>
                <input type="text" name="description" placeholder="Update Your Character Description" ref={ register }/>
                
                <label htmlFor="superpower"> Marvel Superpower</label>
                <input type="text" name="superpower" placeholder="Update Your Character Superpower" ref={ register }/>

                <button type="submit" className="button-styles"> Submit </button>
            </form>
        </Container>
    )
}