import Layout from '../../Shared/Layout'
import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { InertiaLink,usePage,useForm  } from '@inertiajs/inertia-react'

export default function Secrete(props) {
  
  const { passwords } = usePage().props;
  
  const {
    data,
    links
  } = passwords;

  function destroy(e) {
    if (confirm('Are you sure you want to delete this contact?')) {
       Inertia.delete(route('secrete.destroy',e.target.getAttribute("data-index")));
    }
  }
  
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-12 mx-auto'>
          <div className='mb-5'>
            <InertiaLink href='/secrete/add' className='btn btn-primary'>Add New</InertiaLink>
          </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Notes</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map(({ id,name,username,password,secure_notes }) => (
                <tr key={ id }>
                    <td width='20%'>{ id }</td>
                    <td width='20%'>{ name }</td>
                    <td  width='20%'>{ username }</td>
                    <td  width='20%'>{ password }</td>
                    <td width='20%'>{ secure_notes }</td>
                    <td> <InertiaLink href={route('secrete.edit', id)} className='btn btn-sm btn-primary'>Edit</InertiaLink> 
                    <InertiaLink  data-index={id} className='btn btn-sm btn-danger' onClick={destroy} >Delete</InertiaLink> </td>
                </tr>
            ))}

            </tbody>
          </table>
      </div>
      <div className="flex flex-wrap mt-6 -mb-1">
      <ul class="pagination">
        {links.map(({ active, label, url }) => {
          return url === null ? (
            <li class="page-item">
               <InertiaLink class="page-link" href={url}>
              <span dangerouslySetInnerHTML={{ __html: label }}></span>
            </InertiaLink>
            </li>

          ) : (
            <li className={`page-item ${active && "active"}` }>
            <InertiaLink class="page-link"  href={url}>
              <span dangerouslySetInnerHTML={{ __html: label }}></span>
            </InertiaLink>
            </li>
          );
        })}
        </ul>
      </div>
      </div>
    </Layout>
  )
}