
import { useEffect, useState } from "react";
import { searchVideosByTitle, VideoItem } from "../shared/API/Youtube/config";
import { useLocation, useNavigate } from "react-router-dom";

// Custom hook to get search params from the URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VideoPlayer() {
  const [backgroundVideo, setBackgroundVideo] = useState<VideoItem | null>(null);
  const searchParams = useQuery();
  const   title = searchParams.get("title") ?? "";
  const time = searchParams.get("time")?? "";
  const navigate = useNavigate()
  function handleHome(){
    navigate("/home")
  }
  useEffect(() => {
    async function fetchBackgroundVideo() {
      const fetchedVideos = await searchVideosByTitle(title);
      if (fetchedVideos.length > 0) 
        setBackgroundVideo(fetchedVideos[0]);
      
    }
    fetchBackgroundVideo();
  }, [title]);

  return (
    <div className="video-container overflow-hidden h-screen ">
      <div className="rotate-mobile">
        {backgroundVideo && (
          <iframe
            src={`https://www.youtube.com/embed/${backgroundVideo.id}?autoplay=1&mute=1&loop=1&controls=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="h-full md:h-screen"
          ></iframe>
        )}

      </div>
      <div className='mt-8 w-[261px] h-16 ml-6 gap-6 flex items-center justify-center absolute top-0'>
        <img onClick={handleHome} className='w-12 h-12 cursor-pointer' src="/src/assets/icons/sair-player.png" alt="Sair player" />
        <div className='text-white text-left flex flex-col justify-center'>
            <h3 className='h3-heading'>{ title}</h3>
            <p className='body-large opacity-80'>{time} Season</p>
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
    
  );
}

export default VideoPlayer;

