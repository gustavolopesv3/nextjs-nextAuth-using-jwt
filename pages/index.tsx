import React from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import { getToken,  } from "next-auth/jwt"
// using client side session retrieval
const Home = () => {
  const session = useSession();
  console.log(session)

    return (
      <>
        Signed in as  <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
 
export async function getServerSideProps(context:GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default Home;