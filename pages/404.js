import Link from "next/link"
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
  const router = useRouter()
  const [count, setCount] = useState(0)
    useEffect(() => {
   
   setTimeout(() => {
    setCount(count + 1)
   router.push('/about')
   
   }, 5000)
    }, [count])
 

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>
       
       
      </p>
      <p>{count}</p>
    </div>
  );
};

export default NotFound;
