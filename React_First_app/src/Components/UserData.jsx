function UserData(props) {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.address}</p>
      </div>
    <div className="d-flex  justify-content-between ">
          <div className=" d-flex flex-column justify-content-center align-items-center">
        <h2>Post </h2> 
        <p>{props.postNum}</p>
      </div>
      &nbsp;
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>Followers</h2>
        <p>{props.folw}</p>
      </div>
    </div>
    </div>
  );
}
export default UserData;
