
export default function ImgHome(props: any){
    return(
        <>
        <div className="w-screen ">
        <img
          className="w-screen "
          src={props.img}
        ></img>
      </div>
      </>
    )
}