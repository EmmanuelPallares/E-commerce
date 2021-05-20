import Head from "next/head";
import Link from "next/link";


const Signin = () => {
  return (
    <div>
      <Head>
        <title>Iniciar</title>
      </Head>
      <form className="mx-auto my-4" style={{maxWidth:'500px'}}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
        <p className="my-2">
            Aún no tienes una cuenta? <Link href="/register"><a style={{color: 'crimson'}}>Registrate ahora</a></Link>
          </p>
        
      </form>
    </div>
  );
};
export default Signin;
