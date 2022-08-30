import React, { Component, useEffect, useState } from "react";
import Message from "./Message";

export default function ListMessage({ messages }) {
    return (
        <>
            <ul className="space-y-2">
                {
                    messages?.map((message, index) => {
                        return (
                            <Message message={message} key={index} />
                        )
                    })
                }
            </ul>
        </>

    )
}
