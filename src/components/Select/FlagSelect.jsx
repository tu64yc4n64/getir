import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { phones } from "../../utils/consts";
import "./style.css"

const FlagSelect = () => {
    const [selected, setSelected] = useState("TR");



    return (
        <div className="text-[#6b6b6b] w-[109px] h-[100%]">
            <ReactFlagsSelect
                className="flag-select"
                countries={Object.keys(phones)}
                customLabels={phones}

                onSelect={code => setSelected(code)}
                selected={selected}
            />
        </div>
    )
}

export default FlagSelect
