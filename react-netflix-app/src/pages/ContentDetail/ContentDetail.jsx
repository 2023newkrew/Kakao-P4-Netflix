import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentInfo } from "components";
import api from "utils/API";

const ContentDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState({
    id: "",
    title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const getContentDetail = async () => {
    const res = await api.get(`/movie/${id}`);
    setContent(res);
  };
  useEffect(() => {
    getContentDetail();
  }, []);

  return (
    <ContentInfo
      title={content.title}
      desc={content.overview}
      imageURL={content.backdrop_path ?? content.poster_path}
    />
  );
};

export default ContentDetail;
