import React from "react";

export const Resources = (props) => {
  const { propsResources } = props;
  return (
    <>
      {propsResources.map((resource) => (
        <p key={resource.id}>{resource.title}</p>
      ))}
    </>
  );
};
