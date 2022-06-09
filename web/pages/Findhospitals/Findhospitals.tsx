import ProminentAppBar from "../../components/Text";

import Findhospital from "../../components/findhospital";
import Searchme from "../../components/search";




export const Findhospitals = () => {
    return (
        <>
            <ProminentAppBar name={"Find Hospitals Nearby"}/>

            <Searchme label={"Find Hospitals"}/>

            <Findhospital name={"Lourdes Hospitals"} location={"Ernakulam"} phone_number1={"2381273891"}
                          phone_number2={"473824822"} img={"web/assets/images/h1.jpg"} />

            <br/>
                <Findhospital name={"Lissie Hospitals"} location={"Ernakulam"} phone_number1={"2381273891"}
                          phone_number2={"473824822"} img={"web/assets/images/h2.jpg"} />
            <br/>
                <Findhospital name={"Appolo Hospitals"} location={"Ernakulam"} phone_number1={"2381273891"}
                          phone_number2={"473824822"} img={"web/assets/images/h3.jpg"} />
                <br/>

            </>
            );
            };
