import {useLocation, useParams} from "react-router-dom";

export const Params=()=>{
    const params=useParams();
    const loc=useLocation();
    return(
        <>
            <div>
                   <h3>id= {params.id}</h3>

                <p>
                    host={loc.hostname}
                </p>
                <p>
                    protocol={loc.protocol}
                </p>
                <p>
                    origin={loc.origin}
                </p>
                <p>
                    path={loc.pathname}
                </p>
                <p>
                    path={decodeURI(loc.pathname)}
                </p>
            </div>


        </>
    )
}