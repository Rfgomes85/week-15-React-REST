import React from "react";
import {NewRoomForm} from './NewRoomForm.js';

export const House = (props) => {
    const { house, updateHouse} = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId )
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) =>  updateHouse({...house, rooms:[...house,rooms, room]});

    const rooms= () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <button OnClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({rooms, houseId : house_id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom}/>
        </div>
    );
};