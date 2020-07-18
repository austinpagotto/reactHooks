import React from "react";
import { UserContext,ChannelContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
              <ChannelContext.Consumer>
                  {lastName=>{
                      return(
                      <div>{user},{lastName}</div>
                      )
                  }}
              </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
