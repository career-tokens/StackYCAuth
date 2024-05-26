import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Button, Link } from '@nextui-org/react';

const EmailAppDropdown = () => {
  return (
    <Dropdown  className="dark:bg-white dark:bg-opacity-[0.07]">
      <DropdownTrigger>
      <Button  color="success" className="light:bg-[#3aaf9f]">
          Open Email App
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="gmail" as={Link} href='https://mail.google.com' className="text-black dark:!text-white">Gmail</DropdownItem>
        <DropdownItem key="outlook"  as={Link} href='https://outlook.office.com' className="text-black dark:!text-white">Outlook</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  )
}

export default EmailAppDropdown