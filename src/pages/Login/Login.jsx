// import { useState } from 'react';
// import { auth } from '../../firebase/firebaseConfig';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await auth.signInWithEmailAndPassword(email, password);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <label htmlFor="email">Correo electrónico:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Contraseña:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Iniciar sesión</button>
//             {error && <p>{error}</p>}
//         </form>
//     );
// };

// export default Login;
