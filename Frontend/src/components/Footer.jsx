import React from 'react'

function Footer() {
  return (
    <div>  
      <br />  
        <hr />
<footer className=" bg-blue-100 dark:bg-blue-900 footer footer-center bg-base-100 text-base-content rounded p-10 dark:bg-slate-900 
dark:text-white">
  <nav className="grid grid-flow-col gap-3">
    <a className="link link-hover" href="https://shishupalsahu.github.io/Portfolio/">About us</a>
    <a className="link link-hover" >Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a
      href="https://www.instagram.com/shishupal03/"
      target="_blank"
      rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.56.332-3.58 1.352-1.02 1.02-1.294 2.299-1.352 3.58-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.332 2.56 1.352 3.58 1.02 1.02 2.299 1.294 3.58 1.352 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.56-.332 3.58-1.352 1.02-1.02 1.294-2.299 1.352-3.58.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.332-2.56-1.352-3.58-1.02-1.02-2.299-1.294-3.58-1.352-1.28-.058-1.688-.072-4.947-.072z"></path>
        <path
          d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4z"></path>
        <circle cx="18.406" cy="5.594" r="1.44"></circle>
      </svg>
    </a>
    <a
      href="https://www.youtube.com/@shishupalsahu7177"
      target="_blank"
      rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a
      href="https://www.facebook.com/shishupal.ugi"
      target="_blank"
      rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  );
}

export default Footer
