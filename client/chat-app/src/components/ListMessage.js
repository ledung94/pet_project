import React, {Component, useEffect, useState} from "react";
import Message from "./Message";

export default function ListMessage({messages}) {
    
    return (
        <>
            {
                messages?.map((message, index) => {
                    return (
                        <Message message={message} key={index} />
                    )
                })
            }
        </>

    )
}
