
import BasicTextFields from "../../components/search";
import MultiActionAreaCard from "../../components/doctorcard";
import ProminentAppBar from "../../components/Text";
MultiActionAreaCard
ProminentAppBar
BasicTextFields

export const Search = () =>
{
    return (
        <>
            <ProminentAppBar name={"Doctor Search"}/>

            <BasicTextFields/>
            <br/>
        <MultiActionAreaCard/>
            <br/>
        <MultiActionAreaCard/>
        </>
    );
};