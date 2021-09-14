import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product
                        id="121314"
                        title="Apple iPhone 12 Pro Max"
                        price={100000}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/AppleProjectEye/Updated/2020/AMZ_FamiyStripe_iPhone_12ProMax._CB419229783_.png"
                />    
                <Product
                        id="121314"
                        title="Apple iPhone XR"
                        price={120000}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/AppleProjectEye/Updated/2020/AMZ_FamiyStripe_iPhone_Xr._CB419229783_.png"
                />    
                <Product
                        id="121314"
                        title="Apple iPhone XR"
                        price={90000}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/519Wcu07etL._SL1024_.jpg"
                />     
            </div>
            <div className="home__row">
                <Product
                        id="121314"
                        title="Apple MacBook Air"
                        price={150000}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Laptops/apple/Family/Untitled-11._CB406064056_.png"
                />    
                <Product
                        id="121314"
                        title="Apple MacBook Pro"
                        price={180000}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Apple_EYE_2020/11-11-2020/AMZ_FamilyStripe_MacBook_Pro_13_inch_M1._CB415366413_.png"
                />    
                <Product
                        id="121314"
                        title="Apple MacBook Pro"
                        price={190000}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Apple_Project_Eye/iMAC/AMZ_FamilyStripe_MacBook_Pro_16_inch._CB406061669_.png"
                />     
                <Product
                        id="121314"
                        title="Mac Accessories"
                        price={50000}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Apple_Project_Eye/iMAC/Magic_Mouse_2-S_p_a_c_e_Gray-78FR-SCR_EEN._CB406061669_.png"
                />    
            </div>
            <div className="home__row">
                <Product
                        id="121314"
                        title="Apple Airpods Pro"
                        price={20000}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg"
                />    
                <Product
                        id="121314"
                        title="Apple Watch SE"
                        price={35000}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71rhrO49SmL._AC_UY327_FMwebp_QL65_.jpg"
                />    
                </div>
        </div>
    )
}

export default Home