import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('src/assets/bg-login.png')] bg-cover bg-center md:bg-cover md:bg-center md:w-screen md:h-screen">
  <div className='w-398 h-447.95 border-none flex flex-col justify-center items-center text-center gap-6 border-1 p-8 rounded-2xl text-white backdrop-blur bg-customColor md:w-[783px] md:h-[454px]'>
    <h1 className='h1-heading leading-[51.61px] whitespace-nowrap'>Compass Video</h1>
    <p className='w-72 h3-heading text-center md:body-large md:font-normal md:text-[20px] md:w-[278px]'>Acesse sua conta para ver nossos títulos</p>
    <button className='w-[334px] h-[48px] bg-primary-300 leading-[19.2px] px-6 gap-3 rounded tracking-[0.11em] md:tracking-[0.14em] md:w-[374px] md:button-text'>INICIAR SESSÃO COM TMDB</button>
    <div className='flex'>
        <p className='opacity-60 font-normal body-small'>Não tem conta?</p>
        <a href="#" className='font-medium ml-1 body-small md:font-normal'> Acesse como convidado</a>
    </div>
    <img src="/src/assets/logo-compass-uol.png" alt="logo compass uol" className='w-80 h-28' />
  </div>
</div>
  )
}

export default Login