import React from "react";
import { TextBlock } from "./styles";

export default function FooterCopyRight() {
  return (
    <div className="footer__copy-right">
      <TextBlock>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587
      </TextBlock>
      <TextBlock>대표: 레지널드 숀 톰프슨</TextBlock>
      <TextBlock>이메일 주소: korea@netflix.com</TextBlock>
      <TextBlock>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</TextBlock>
      <TextBlock>사업자등록번호: 165-87-00119</TextBlock>
      <TextBlock>클라우드 호스팅: Amazon Web Services Inc.</TextBlock>
    </div>
  );
}
