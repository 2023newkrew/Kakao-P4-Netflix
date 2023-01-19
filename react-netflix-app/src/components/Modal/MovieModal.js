import { useEffect } from "react";

const MovieModal = ({ Modal, movieYoutubeURL, movieInfo }) => {
  return (
    <>
      <Modal>
        <iframe src={movieYoutubeURL} title="YouTube video player" frameBorder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen />
        <div className="modal_movieCardContainer">
          <div>
            <div className="movieCard_title">{movieInfo.title}</div>
            <div className="movieCard_subTitle">{movieInfo.tagline}</div>
            <div className="movieCard_info">
              <div className="movieCard_overview">{movieInfo.overview}</div>
            </div>
          </div>
          <div className="movieCard_subInfo">
            <div>평점 : {Math.round(movieInfo.vote_average, 1)}점</div>
            <div>장르 : [ {movieInfo.genres && movieInfo.genres.map((genre) => genre.name + " ")}]</div>
            <div>개봉일 : {movieInfo.release_date}</div>
            <div>러닝타임 : {movieInfo.runtime}분</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MovieModal;
