import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
          <Dropdown pointing="top left" text="Dogukan">
            <Dropdown.Menu>
              <Dropdown.Item text="Information" icon="info"/>
              <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out"/>   
          </Dropdown.Menu>
          </Dropdown>
          
      </Menu.Item>
    </div>
  );
}
