import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
    const [values, setValues] = useState({
        productName: '',
        productDescription: '',
        productCost: '',
        productImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            const response = await axios.post('/product/add', values);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="container mt-4 ">


            <div class="card card-custom gutter-b">
                <div class="card-header bg-warning">
                    <div class="card-title">
                        <h3 class="card-label">
                            Add Product
                        </h3>
                    </div>
                </div>
                <div class="card-body bg-dark mb-2">
                    <div className="row p-5">
                        <div className="col-md-4">

                            <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
                                <label htmlFor="name" class="text-white">Product Name</label>
                                <input type="text" id="name" name="productName" className="form-control" onChange={handleChange} /><br />

                                <label htmlFor="cat" class="text-white">Category</label>
                                <input type="text" id="cat" name="productCategory" className="form-control" onChange={handleChange} />

                                <label htmlFor="desc" class="text-white">Description</label>
                                <input type="text" id="desc" name="productDescription" className="form-control" onChange={handleChange} />

                                <label htmlFor="price" class="text-white">Price</label>
                                <input type="number" id="price" name="productCost" min="0" className="form-control" onChange={handleChange} />

                                <label htmlFor="img" class="text-white">Image</label>
                                <input type="file" id="img" name="productImage" className="form-control" onChange={handleChange} />

                                <button type="submit" className="btn btn-success mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default AddProduct;
