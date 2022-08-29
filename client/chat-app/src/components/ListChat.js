import React, {Component, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";

export default function ListChat() {
    const [cookies, setCookies] = useCookies(['t-app']);
    const [rooms, setRooms] = useState();
    const userToken = cookies["t-app"];
    const endpoint = `http://localhost:5000/api/room/list`;
    const getRooms = () => {
        axios.get(endpoint, {headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            }}).then(res => {
                setRooms(res.data.rooms);
            }).catch(error => console.log(error))
    }

    useEffect(() => {
        getRooms();
    }, [])

    console.log(rooms)
    return (
        <>
            <div className="list-chat">
                <div>
                    {
                        rooms.map(function (item, i) {
                            // console.log(item);
                        })
                    }

                </div>
            </div>
        </>

    )
}
