import './App.css'
import FooterDisp from './Footer'
import NavbarDisp from './Navbar'

function App() {
  return 
  
  <div
    style={{
      backgroundColor: "#AEDAA6",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "745px",
      width: "100%",
    }}
  >
    {/* card */}
    <div
      style={{
        height: "482px",
        width: "55%",
        margin: "auto",
        backgroundColor: "white",
        position: "absolute",
        transform: "translate(-50%,-50%)",
        top: "50%",
        left: "50%",
      }}
    >
      {/* navbar */}
      <NavbarDisp />
      {/* product */}
      <div style={{ display: "flex" }}>
        {/* img */}
        <div
          style={{
            height: "420px",
            width: "40%",
            borderRight: "1px solid grey",
          }}
        >
          <div
            style={{
              height: "420px",
              width: "80%",
              margin: "10px auto",
            }}
          >
            <img
              src="https://bfasset.costco-static.com/U447IH35/as/ht3gqhv8ck66cp87hgnscb27/4000300222-847__1?auto=webp&amp;format=jpg&width=600&height=600&fit=bounds&canvas=600,600"
              alt=""
              style={{ width: "90%", height: "85%" }}
            />
          </div>
        </div>
        {/* words */}
        <div style={{ height: "420px", width: "60%" }}>
          {/* Captions */}
          <div>
            <div
              style={{
                height: "300px",
                width: "80%",
                position: "relative",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <h2
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "lighter",
                  textAlign: "left",
                  color:"grey",
                  fontSize:"38px"
                }}
              >
                CLASSIC PEACE LILY
                  <p style={{
                fontFamily:"sans-serif",
                fontWeight:"lighter",
                color:"grey",
                fontSize:"14px",
                marginLeft:"10px"
              }}>POPULAR HOUSE PLANT</p>
               <p style={{ fontFamily:"sans-serif",
                fontWeight:"lighter",
                color:"grey",
                fontSize:"35px",
                marginLeft:"10px"}}>$18</p>
                <p style={{ margin: "20px",fontFamily:"sans-serif",fontWeight:"lighter",color:"grey",fontSize:"16px" }}>
                The Classic Peace Lily (Spathiphyllum) is a popular,
                low-maintenance indoor plant known for its elegant white flowers
                and air-purifying qualities.
              </p>
              </h2>
            
              {/* buttons */}
              <div>
                <button
                  style={{
                    height: "33px",
                    width:"150px",
                    backgroundColor: "white",
                    border: "1px solid grey",
                    color:"grey",
                    margin:"20px 30px",
                    fontFamily:"sans-serif",
                    fontWeight:"bold"
                  }}
                >
                  ADD TO CART
                </button>
                <button style={{
                    height: "33px",
                    width:"150px",
                    backgroundColor: "white",
                    border: "1px solid grey",
                    color:"grey",
                    fontFamily:"sans-serif",
                    fontWeight:"bold"
                  }}>WISHLIST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterDisp />
    </div>
  </div>
}

export default App
