import React, { useEffect } from "react";
import { getArticles } from "../../features/articleSlice";
import { useDispatch } from "react-redux";
import Viewarticles from "./Viewarticles";

const Listarticles = () => {
  const dispatch = useDispatch();

  const loadarticles = async () => {
    await dispatch(getArticles()); // dispatch is a call
  };

  useEffect(() => {
    loadarticles();
  }, []);

  return (
    <div>
      <Viewarticles />
    </div>
  );
};

export default Listarticles;
