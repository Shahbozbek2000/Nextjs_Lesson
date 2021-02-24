import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src='/logo.jpg' style={{width:'100px', 
        objectFit:'cover', marginTop:'10px', height:'40px'}} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja listing</Link>
    </nav>
  );
};

export default Navbar;
