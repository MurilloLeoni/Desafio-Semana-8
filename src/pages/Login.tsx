import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('src/assets/bg-login.png')] bg-cover bg-center">
        <div className='border-none flex flex-col justify-center items-center text-center gap-6 border-1 p-7 rounded-[20px] text-white backdrop-blur bg-customColor md:w-[783px] md:h-[454px]'>
            <h1 className='h1-heading leading-[51.61px] whitespace-nowrap'>Compass Video</h1>
            <p className='text-center body-large font-normal text-[20px] w-[278px]'>Acesse sua conta para ver   nossos títulos</p>
            <button className='bg-primary-300 px-9 py-3 rounded tracking-[0.14em] button-text md:px-14'>INICIAR     SESSÃO COM TMDB</button>
            <div className='flex body-small'>
                <p className='opacity-60'>Não tem conta?</p>
                <a href="#" className='ml-1'> Acesse como convidado</a>
            </div>
            <img src="/src/assets/logo-compass-uol.png" alt="logo compass uol" className='w-80 h-28' />
        </div>
    </div>
  )
}

export default Login