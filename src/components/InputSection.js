import React, { useState } from "react";

export default function InputSection({ socket }) {
  const [pName, setPName] = useState("");
  const [pId, setPId] = useState("");

  return (
    <div>
      {" "}
      <header className="App-header">
        <input
          type="text"
          name="product name"
          id=""
          onChange={(e) => setPName(e.target.value)}
        />
        <input
          type="text"
          name="product name"
          id=""
          onChange={(e) => setPId(e.target.value)}
        />

        <button
          onClick={() => {
            socket.emit("productInfo", {
              name: pName,
              id: pId,
            });
          }}
        >
          this is btn
        </button>
      </header>
    </div>
  );
}
