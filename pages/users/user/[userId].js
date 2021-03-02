import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'




function user(props) {
    const router = useRouter()
    const { userId } = router.query
    if(props.serverPropsUser){
      return (
        <div >
          <Head>
            <title>next-idea | {props.serverPropsUser.name}</title>
            <meta name="description" content={`${props.serverPropsUser.name} works at "${props.serverPropsUser.company.name}" company`} />
            <meta name="title" content={`next-idea | ${props.serverPropsUser.name}`}/>
    
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`https://next-idea-neon.vercel.app/users/user/${userId}`}/>
            <meta property="og:title" content={`next-idea | ${props.serverPropsUser.name}`}/>
            <meta property="og:description" content={`${props.serverPropsUser.name} works at "${props.serverPropsUser.company.name}" company`}/>
            <meta property="og:image" content={`https://dummyimage.com/250x250/7b8efa/fff.png&text=${props.serverPropsUser.name}`}/>
    
            
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`https://next-idea-neon.vercel.app/users/user/${userId}`}/>
            <meta property="twitter:title" content={`next-idea | ${props.serverPropsUser.name}`}/>
            <meta property="twitter:description" content={`${props.serverPropsUser.name} works at "${props.serverPropsUser.company.name}" company`}/>
            <meta property="twitter:image" content={`https://dummyimage.com/250x250/7b8efa/fff.png&text=${props.serverPropsUser.name}`}></meta>
          </Head>
    
          <main>
            <img src={`https://dummyimage.com/250x250/7b8efa/fff.png&text=${props.serverPropsUser.name}`} alt={props.serverPropsUser.name} />
            <br/><br/>
            Id :  {userId}
            <br/><br/>
            Name :  {props.serverPropsUser.name}
            <br/><br/>
            Email :  {props.serverPropsUser.email}
            <br/><br/>
            phone :  {props.serverPropsUser.phone}
            <br/><br/>
          </main>
    
        
        </div>
      )
    }
}

export async function getServerSideProps(context) {
    const userId = context.params.userId;

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).catch(()=>{});
    const data =  res? await res.data : null;
    
    if(data){
      return {
        props: {serverPropsUser : data}, // will be passed to the page component as props
      }
    }
    else{
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        }
      }
    }

  }

export default user;