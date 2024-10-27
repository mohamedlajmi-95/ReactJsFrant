import React from "react";
import { useSelector } from "react-redux";

const Viewarticles = () => {
  const { articles, isLoading, error } = useSelector(
    (state) => state.storearticles
  );
  return;
  <div>
    {isLoading ? (
      <h1>Charging ... </h1>
    ) : (
      <table>
        <tr>
          <th>Referance</th>
          <th>Designation</th>
        </tr>
        {articles.map((art, index) => (
          <tr key={index}>
            <td>{art.reference}</td>
            <td>{art.designation}</td>
          </tr>
        ))}
        ;
      </table>
    )}
  </div>;
};
export default Viewarticles;
