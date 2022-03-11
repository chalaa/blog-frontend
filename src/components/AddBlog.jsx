import React from "react";

const AddBlog = () => {
    return ( 
        <div className="addblog">
            <form action="" method="post" >
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Add Image</label>
                    <input type="file" name="" id="" className="form-control custom-file-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Detail</label>
                    <textarea name="detail" id="" cols="50" rows="100" className="form-control text-feild"></textarea>
                </div>
            </form>
        </div>
     );
}
 
export default AddBlog;
<div>
    <form action="" method="post"></form>
</div>