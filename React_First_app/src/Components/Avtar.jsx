function AvtarImg(props){
    return       <div className="h-100 w-100  p-3">
        <div className=" rounded-circle h-100 w-100  ">
            <img src={props.image} alt="User Avatar" className="h-100 img-fluid " style={{borderRadius:"50%"}} />
        </div>
    </div>

    
}
export default AvtarImg;