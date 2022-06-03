import React from "react"

const Sidebar: React.FC = () => {
    return (
        <div className="font-bold fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary">
            <i>Home</i>
            <i>Dashboard</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
        </div>
    )
}

export default Sidebar