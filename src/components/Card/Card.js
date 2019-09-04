import React from "react";
import CardHeader from "./layout/CardHeader/CardHeader.component";
import "./Card.scss";
import CardContent from "./layout/CardContent/CardContent.component";
import CardFooter from "./layout/CardFooter/CardFooter.component";
const Card = () => {
  return (
    <div className="card">
      <CardHeader />
      <CardContent />
      <CardFooter />
    </div>
  );
};

export default Card;
