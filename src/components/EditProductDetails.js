import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Axios from 'axios'
import { editProduct } from '../redux/actions'
import { deleteProduct } from "../redux/actions";
// import {
//   Card, CardImg, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function EditProductDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();
  const dispatch = useDispatch();

  const fetchDetails = ()=>{
    Axios.get(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
      .then((response)=>{
        setData(response.data)
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
      })
      .catch(setError)
      .finally(()=>setLoading(false))
  }

  useEffect(()=>{
    fetchDetails();
  }, [params]);

  if(loading) return(
    <h1>Loading...</h1>
  )
  if(error) return(
    <h1 className="text-danger">Error : {error.message}</h1>
  )

  const handleChangeProduct=(e)=>{
    e.preventDefault();
    dispatch(editProduct({
      ...data,
      id:data.id,
      title:data.title,
      description:data.description,
      price:data.price,
      updatedAt: new Date().toJSON(),
    }));
  }
    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteProduct(data.id));
    };

  return (
    <div>
      <Form onSubmit={handleChangeProduct}>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Last name</Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Number</Label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
        <p>created at: {new Date(data.createdAt).toLocaleString()}</p>
        <p>updated at: {new Date(data.updatedAt).toLocaleString()}</p>
        <Button onSubmit={handleChangeProduct}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Form>
    </div>
  );
}
