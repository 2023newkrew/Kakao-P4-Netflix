import { Banner } from '@pages/Main/MainPage.style';
import sampleVideo from '@assets/videos/sample.mp4';
import playIcon from '@icons/play.svg';

const MovieBanner = () => {
  return (
    <Banner.Container>
      <Banner.BackgroundLayer>
        <img
          src="https://occ-0-2218-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaoZWbJawsMDhF2SyAWJNARRvnNc0zA6TH5NzHjK35Fe-jx4CEYZz180J24CKS30JRmuaca3o9trGBxR1l1Zg8voFu3el5vy0SsK.webp?r=a35"
          alt="배너 이미지"
        />
      </Banner.BackgroundLayer>
      <Banner.BackgroundLayer>
        <video width="100%" height="100%" preload="auto" autoPlay loop>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </Banner.BackgroundLayer>
      <Banner.Content>
        <Banner.MovieInfo>
          <h3>아바타</h3>
          <p>세상에 없던 광경이 펼쳐진다!</p>
          <div>
            <Banner.Button className="primary">
              <img src={playIcon} alt="재생 아이콘" />
              재생
            </Banner.Button>
            <Banner.Button className="secondary">상세 정보</Banner.Button>
          </div>
        </Banner.MovieInfo>
        <Banner.Utils>
          <button>음소거 버튼</button>
          <span>15세+</span>
        </Banner.Utils>
      </Banner.Content>
    </Banner.Container>
  );
};
export default MovieBanner;
