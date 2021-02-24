import academyStyles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
    const data = await res.json()

    return {
        props : {
            academy: data
        }
    }
}

const Ninjas = ({academy}) => {
    return ( 
     <div>
     <h2>Ismlar ro'yxati</h2>
     {
         academy.map(item => (
             <Link href={'/ninjas/' + item.id}>
             <a className={academyStyles.single} key={item.id}>
               <h3>{item.name}</h3>
             </a>
             </Link>
         ))
     }
     </div>
     );
}
 
export default Ninjas