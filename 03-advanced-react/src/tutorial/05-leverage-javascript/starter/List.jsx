import React from 'react';
import {people} from "../../../data.js";
import Person from "./Person.jsx";

const List = () => {
    return (
        <section>
            <h2>List</h2>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                {
                    people.map((person) => <Person {...person} />)
                }
            </div>
        </section>
    );
};

export default List;