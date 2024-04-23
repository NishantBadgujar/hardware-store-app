import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
<footer className='bg-slate-200'>
<div className="font-serif w-full h-[700px]  sm:h-72">
  <div className="flex justify-between footer-1 w-full h-auto large-colums-5 flex-col gap-12 items-center sm:flex-row m-6">
    <div> 
    <span>MY ACCOUNT</span>
    
    <li><Link href="">Cart</Link></li>
    
    <li><Link href="">Contact</Link></li>
    
    <li><Link href="">Checkout</Link></li>
    </div>
    <div>
    <span>INFORMATION</span>
    
    <li> <Link href="">Checkout</Link></li>
    <li><Link href="">How it works</Link></li>
    <li><Link href="">Gallary</Link></li>
    <li><Link href="">Covid-19 FQ</Link></li>
    </div>

    <div>
    <span>WHY CHOICE US</span>
    <li><Link href="">Support</Link></li>
   <li><Link href="">Contact us</Link></li>
    <li><Link href="">Resseller Program</Link></li>
    <li><Link href="">About us</Link></li>
    </div>

    <div>
    <span>POLIES</span>
    <li><Link href="">Privacy Polies</Link></li>
    <li><Link href="">Terms & condition</Link></li>
    </div>

    <div>
      <span>CONNECT WITH US</span>
    <li><Link href="">Instagram</Link></li>
    <li><Link href="">Facebook</Link></li>
    <li><Link href="">WhatsApp</Link></li>
    </div>

    </div>

  <div className="footer-2 w-full m-10 text-center bg-slate-200 ">

    <span>Copyright 2024 @MajjuSangathana</span>

  </div>

</div>

    
</footer>

    
  )
}

export default Footer