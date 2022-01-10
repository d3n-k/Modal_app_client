function CardComp({title, name, description}) {
  return (
    <div style={{ padding: "1.25rem" }} className="card">
      <h4>
       {title}
      </h4>
      <h6 className="fullname">
       {name}
      </h6>
      <div className="descript">
       {description}
      </div>
    </div>
  );
}

export default CardComp;
