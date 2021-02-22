import React from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    name: string,
    model: string,
    price: number
}

export const CreateMarvel = () => {

{/* Creating a deconstructed value for UseForm Hook */}
const  { register, handleSubmit } = useForm<Inputs>();

const onSubmit = (data:any) => {
    console.log(data)
    server_calls.create(data)
}

    return (
        <Container>
            <h1>Create Your New Marvel Character</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name">Marvel Name</label>
                <input type="text" name="name" id="name" placeholder="Add Marvel Character Name" ref={ register }/>

                <label htmlFor="description">Marvel Character Description</label>
                <input type="text" name="description" id="description" placeholder="Add Marvel Character Description" ref={ register }/>

                <label htmlFor="superpower">Marvel Superpower</label>
                <input type="text" name="superpower" id="superpower" placeholder="Add Marvel Superpower" ref={ register }/>

                <button type="submit" className="button-styles">Submit Character</button>
            </form>
        </Container>
    )
}
