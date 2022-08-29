import React, { useState, useEffect } from "react";
import ListRoom from "../components/ListRoom";
import {useCookies} from "react-cookie";
import axios from "axios";

export default function HomePage() {
    const [cookies, setCookies] = useCookies(['t-app']);
    const [data, setData] = useState();

    const userToken = cookies["t-app"];
    const endpoint = `http://localhost:5000/api/room/list`;

    const fetchData = async () => {
        const result = await axios(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }
        })

        setData(result.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(data?.rooms);

    return (
        <div>
            <h1>List room</h1>
            <ListRoom rooms={data?.rooms} />
        </div>


    )
}