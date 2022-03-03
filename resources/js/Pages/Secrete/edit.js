import Layout from '../../Shared/Layout'
import React, { Component, useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { InertiaLink, useForm ,usePage} from '@inertiajs/inertia-react';


export default function SecreteEdit() {

    const { passwords } = usePage().props;

    const { data, setData, errors,put, processing } = useForm({
        category: passwords.category || '',
        name: passwords.name || '',
        username:passwords.username || '',
        password: passwords.password ||'',
        secure_notes: passwords.secure_notes|| '',
      });

     function handleSubmit(e) {
        e.preventDefault();
        put(route('secrete.update', passwords.id));
      }

    return (
        <Layout>
            <div className='row'>
            <div className='col-md-6 mx-auto'>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="category"  className="form-label">Category: </label>
                  <select className="form-select" value={data.category} name='category' onChange={e => setData('category', e.target.value)} aria-label="Default select example">
                  <option value=""></option>
                  <option value="web_account">Web Account</option>
                  <option value="social_account">Social Account</option>
                  <option value="others">Others</option>
                </select>
                {errors.category && <div className="error">{errors.category}</div>}
            </div>
              <div className="mb-3">
                <label htmlFor="name"  className="form-label">Name: </label>
                <input type="text" name='name' className="form-control" value={data.name} placeholder='Gmail,Facebook,xyz.com' id="name" onChange={e => setData('name', e.target.value)}/>
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

                <div className="mb-3">
                <label htmlFor="username"  className="form-label">Username </label>
                <input type="text" name='username' className="form-control" placeholder='admin, admin@mail.com' value={data.username} onChange={e => setData('username', e.target.value)} id="username"/>
                {errors.username && <div className="error">{errors.username}</div>}
                </div>
                <div className="mb-3">
                <label htmlFor="password"  className="form-label">Password: </label>
                <input type="text" name='password' className="form-control" id="password" value={data.password} onChange={e => setData('password', e.target.value)}/>
                {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <div className="mb-3">
                <label htmlFor="notes" className="form-label">Secure Notes</label>
                <textarea name='secure_notes' className="form-control" id="notes" rows="3" onChange={e => setData('secure_notes', e.target.value)}>{data.secure_notes}</textarea>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Save</button> 
                </div>
            </form>
            </div>
            </div>
        </Layout>
       ) 
}