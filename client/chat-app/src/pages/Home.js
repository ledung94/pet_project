import React, { useState, useEffect } from "react";
import ListRoom from "../components/ListRoom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Room from "../components/Room";

export default function HomePage() {
    const [cookies, setCookies] = useCookies(['t-app']);
    const [messages, setMessages] = useState();
    const [rooms, setRooms] = useState();

    const token = cookies["t-app"];
    const fetchData = async () => {
        const resultMessage = await axios('http://localhost:5000/api/room/open?id=630433173066d4eff51732d2', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })

        setMessages(resultMessage.data)

        const resultRoom = await axios('http://localhost:5000/api/room/list', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })

        setRooms(resultRoom.data.rooms)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
                <ListRoom rooms={rooms} />
                <Room room={messages} />
            </div>
        </div>


    )
}