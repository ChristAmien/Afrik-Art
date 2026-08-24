import React from 'react'
import { ShoppingCart } from 'lucide-react'

export const NavBar = () => {
    return (
        <section className='bg-amber-50'>
            <nav>
                <div className='flex items-center justify-around'>
                    <a href="#">
                        <img 
                            className='-translate-y-4'
                            src="src/assets/logos/3-removebg-preview.png" 
                            alt="logo"
                            height={120}
                            width={120}
                        />
                    </a>
                    <ol className="flex items-center justify-between gap-8 list-none font-['Poppins'] ">
                        <li>
                            <a 
                                className=""
                                href="#accueil">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#apropos">
                                A propos
                            </a>
                        </li>
                        <li>
                            <a href="#gallery">
                                Gallerie
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Contacts
                            </a>
                        </li>
                    </ol>

                    <div className='flex items-center gap-3'>
                        <a 
                            className='border bg-amber-600 text-white p-2 rounded-md'
                            href="">
                            Commander un produit
                        </a>
                        <a
                            className='text-amber-700 hover:text-amber-900'
                            href="#panier"
                            aria-label="Voir le panier"
                            title="Voir le panier">
                            <ShoppingCart size={24} strokeWidth={2} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    )
}
