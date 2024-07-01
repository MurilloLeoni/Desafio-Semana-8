const Player = () => {
  return (
    <div>
        <video className="w-screen h-screen object-cover" autoPlay loop muted>
        <source src="" type="video/mp4"/>
        </video>
        <div className='mt-8 w-[261px] h-16 ml-6 gap-6 flex items-center justify-center absolute top-0'>
        <img className='w-12 h-12 cursor-pointer' src="/src/assets/icons/sair-player.png" alt="Sair player" />
        <div className='text-white text-left flex flex-col justify-center'>
            <h3 className='h3-heading'>Nome Filme</h3>
            <p className='body-large opacity-80'>T1:E1 Nome Ep</p>
        </div>
        </div>
    <div className="absolute bottom-0 w-full flex justify-between cursor-pointer p-4">
        <img className='absolute bottom-[54px] left-11 mx-auto' src="/src/assets/img/progressbar.png" alt="Barra progresso filme" />
      <div className="w-[358px] flex justify-between items-center ml-[20px]">
        <img src="/src/assets/icons/voltar.png" alt="Voltar player" />
        <img src="/src/assets/icons/pausar.png" alt="Pausar" />
        <img src="/src/assets/icons/avancar.png" alt="Avançar" />
        <div className="flex justify-center items-center">
          <img src="/src/assets/icons/volume.png" alt="Volume" />
          <p className="ml-5 text-white">10:00 / 52:20</p>
        </div>
      </div>
      <div className="flex w-[313px] justify-between mr-[80px]">
        <img src="/src/assets/icons/help.png" alt="Ajuda" />
        <img src="/src/assets/icons/Next.png" alt="Próximo ep" />
        <img src="/src/assets/icons/episodes.png" alt="Episódios" />
        <img src="/src/assets/icons/subtitles.png" alt="Legendas" />
        <img src="/src/assets/icons/expand.png" alt="Aumentar" />
      </div>
    </div>
  </div>
  )
}

export default Player