import React, {useState} from 'react'
import Carrossel from '../components/Carrossel'
import Header from '../shared/header/Header'

const User_Account = () => {
    const [filmesFavoritos, setFilmesFavoritos] = useState([])
    const [seriesFavoritas, setSeriesFavoritas] = useState([])
    const [filmesVerDepois, setFilmesVerDepois] = useState([])
    const [seriesVerDepois, setSeriesVerDepois] = useState([])

    const isEmpty: boolean =
    filmesFavoritos.length === 0 &&
    seriesFavoritas.length === 0 &&
    filmesVerDepois.length === 0 &&
    seriesVerDepois.length === 0;

  return (
  <div className='h-screen bg-neutral-600'>
    <Header/>
    <div>
        <div className=' text-white ml-4 md:ml-24'>
            <h2 className='h2-heading'>Minhas listas</h2>
            <p className='body-small opacity-60'>Listas criadas por você de acordo com seus gostos</p>
        </div>
        {isEmpty? (
            <div>
            <p className='text-white ml-4 mt-4 md:ml-24 body-review'>
            Nenhum filme ou série foi adicionado às suas listas. Adicione algo para começar!
          </p>
          </div>
        ) : (
            <>
            {filmesFavoritos.length>0 && (
                <div className="ml-4 pt-2 pb-11 mt-4 md:ml-24">
                <div className="flex flex-col gap-2">        
                <h4 className="h4-heading text-white">Filmes favoritos</h4>        
                <Carrossel/>   
                </div> 
                </div>
            )}

            {seriesFavoritas.length>0 && (
            <div className="ml-4 pt-2 pb-11 md:ml-24">
            <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Séries favoritas</h4>
            <Carrossel/>
            </div>
            </div>    
            )}

            {filmesVerDepois.length>0 && (
            <div className="ml-4 pt-2 pb-11 md:ml-24">
            <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Filmes para ver mais tarde</h4>
            <Carrossel/>
            </div>
            </div>    
            )}

            {seriesVerDepois.length>0 && (
            <div className="ml-4 pt-2 pb-11 md:ml-24">
            <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Séries para ver mais tarde</h4>
            <Carrossel/>
            </div>
            </div>    
            )}
            </>
        )}      
    </div>
    </div>
  )
}

export default User_Account