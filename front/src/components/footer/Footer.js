import React from "react"
import{FooterContainer} from "./style"
import { WhatsAppOutlined, DollarCircleOutlined } from '@ant-design/icons'
export default function Footer() {
  return (
    <FooterContainer>
    
     <p> <WhatsAppOutlined /> (11) 99806-0529</p>
     <p><DollarCircleOutlined /> Pix-CPF: 554.098.768-09</p>
    
    </FooterContainer>
  );
}

