import Logo from "./Logo";
import Nav from "./Nav";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';

export default function Layout({ children }) {
    const { flash } = usePage().props
    return (
        <>
            <main>
                <header class="p-3 bg-dark text-white">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Logo />
                            <Nav />
                            <div class="text-end">
                                 <Link href="#" class="btn btn-warning">
                                    CRUD
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <article>
                  <div className="container">
                    <div className="col-m-8 mt-5 mx-auto">
                    {flash.success && (
                            <div class="alert alert-info">{flash.success}</div>
                    )}
                    {children}
                   </div>
                  </div>
                </article>
            </main>
        </>
    );
}
