import Head from "next/head";
import Link from "next/link";
import {useState,useContext} from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'


const Register=()=>{
  const initialState={name:'',email:'', password:'', cf_password:''}
  const [userData, setUserData] = useState (initialState)
  const {name,email,password,cf_password} = userData
  const [state,dispatch] = useContext(DataContext)
  const handleChangeInput=e =>{
    const {name, value} = e.target
    setUserData ({...userData,[name]:value})
    dispatch ({type:'NOTIFY',payload:{}})
  }

  const handleSubmit =  async e => {
    e.preventDefault()
    const errMsg = valid(name,email,password,cf_password)
    if(errMsg) return dispatch ({type:'NOTIFY', payload:{error:errMsg}})
    dispatch ({type:'NOTIFY', payload:{loading:true}})
    const res= await postData('auth/register',userData)
    console.log(res)
    
      }
    return(
      <div>
        <Head>
          <title>Registro</title>
        </Head>
        <form className="mx-auto my-4" style={{maxWidth:'500px'}} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name' value={name} onChange={handleChangeInput}
          />
          </div>
      
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email' value={email} onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password' value={password} onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name='cf_password' value={cf_password} onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
        <p className="my-2">
            Ya tienes una cuenta ? <Link href="/signin"><a style={{color: 'crimson'}}>Iniciar Sesión</a></Link>
          </p>
        
      </form>
        
      </div>
    )
  }
  export default Register;