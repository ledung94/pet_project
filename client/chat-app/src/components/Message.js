import React from "react";

export default function Message({message}) {
    const className = message.sender ? "relative max-w-xl px-4 py-2 text-gray-700 rounded shadow" : "relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow";
    const positionClass = message.sender ? "flex justify-start" : "flex justify-end";
    return (
        <li className={positionClass}>
            <div className={className}>
                <span className="block">{message.content}</span>
            </div>
        </li>
    )
}