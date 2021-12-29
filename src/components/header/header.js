import React from "react";
import { Menu } from "./style";
import Logo from "../../assets/logo.png"

import { Icon } from '@iconify/react';
import { Icons } from "./style";

const Header = () => {
  return (
    <Menu>
        <img src = {Logo} />
        <header>
            <p>Início</p>
            <p>Nossos Serviços</p>
            <p>Nossa Equipe</p>
            <p>Contato</p>
        </header>
        <Icons>
            <a  href="https://api.whatsapp.com/send?phone=+5511982702905&text=Olá! 
            Gostaria de saber mais sobre os serviços da Foccos." target="_blank"><Icon href="" icon="logos:whatsapp"  width="20" height="20" inline={true} /></a>
            <a href="https://br.linkedin.com/company/foccos-consultoria" target="_blank"><Icon icon="logos:linkedin-icon" width="20" height="20" inline={true}></Icon></a>
            
            
            <a href="mailto:marcos.costa@foccosconsultoria.com?subject=Produtos e Serviços &body=Olá, Eu gostaria de um orçamento">
            <Icon href="" icon="icon-park:email-block" width="20" height="20" inline={true} />
            </a>
            
        </Icons>
    </Menu>
  );
}

export default Header;