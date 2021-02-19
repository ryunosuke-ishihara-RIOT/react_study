import React from "react";

export const Resources = ({ resources }) => {
  return (
    <>
      {resources.map((resource) => (
        <p key={resource.id}>{resource.title}</p>
      ))}
    </>
  );
};
