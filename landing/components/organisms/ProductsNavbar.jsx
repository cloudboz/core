// core modules
import Image from 'next/image'
import { useState, useCallback, useEffect, useRef } from 'react'
// third party modules
import { BsList, BsXLg } from 'react-icons/bs/index'
// internal modules
import useObserver from 'hooks/useIntersectionObserver'
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import { useNavbarTrigger } from 'context/NavbarTriggerProvider'
import ProductsNavLinksMobile from 'components/molecules/ProductsNavLinksMobile'
import ProductsNavLinksDesktop from 'components/molecules/ProductsNavLinksDesktop'
// assets
import assets from 'assets'
import clsx from 'clsx'

const ProductsNavbar = () => {
    const { isIntersecting } = useNavbarTrigger()

    const navRef = useRef()
    const options = useRef({
        root: null,
        rootMargin: '0px',
        threshold: 0
    })

    const [isShowMobileNav, setShowMobileNav] = useState(false)
    const [isNavIntersecting, setIsNavIntersecting] = useState(true)
    const handleShowMobileNav = useCallback(() => setShowMobileNav(prev => !prev), [setShowMobileNav])

    useEffect(() => {
        if(isShowMobileNav) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')

    }, [isShowMobileNav])
    
    useObserver(
        navRef,
        options, 
        useCallback((observer, entries, navRef) => {
            
            if(entries[0].isIntersecting) setIsNavIntersecting(true)
            else setIsNavIntersecting(false)
            
        }, [setIsNavIntersecting])
    )

    return (
        <>
            <nav 
                ref={navRef}
                className={
                    clsx(
                        !isNavIntersecting ? 'opacity-0' : 'opacity-100',
                        !isIntersecting ? 'border-b border-gray-300 sticky top-0 opacity-100' : '' ,
                        'transition-all duration-800 w-full px-6 py-4 flex justify-between items-center bg-white z-50 relative md:px-8 md:py-5 lg:justify-start'
                    )
                }
            >
                <ProductsNavLink href="/" className="z-50">
                    <Image src={assets.images.TERRAFORM_CLOUD} />
                </ProductsNavLink>
                <ProductsNavLinksDesktop />
                <button onClick={handleShowMobileNav} className="lg:hidden">
                    {
                        isShowMobileNav
                            ? <BsXLg size={18} />
                            : <BsList size={26} />
                    }
                </button>
            </nav>
            <ProductsNavLinksMobile shouldBeShow={isShowMobileNav} />
        </>
    )
}

export default ProductsNavbar