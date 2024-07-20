import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <SignInButton />
    </div>
  );
};

export default Home;

function SignInButton() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // サインイン成功時に/todoにリダイレクト
        const user = result.user;
        navigate('/todo', { state: { uid: user.uid } });
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
}
