import{u as p,j as e}from"./main-26e121a8.js";import{r as l}from"./react-f0d12c14.js";import{s as t}from"./styled-components.browser.esm-49ceb9e0.js";import{e as x,T as d}from"./antd-3c331411.js";const c="/assets/theme_song-a466c804.jpg",n="/assets/boss-fcb424b1.png",g=[{id:1,image:n,name:"Boss",role:"director"},{id:2,image:n,name:"billkin",role:"Teh"},{id:3,image:n,name:"pp krit",role:"Oh-aew"},{id:4,image:n,name:"Nat Kitcharit",role:"Hoon"},{id:5,image:n,name:"Khunpol",role:"Bass"}],h=g;t.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  height: 82px;
  position: relative;
  &:hover {
    background: #ecf5ff !important;
    color: #005a9f;
    svg {
      path {
        fill: #005a9f;
      }
    }
  }
  margin: 20px 15%;
  padding: 0 40px;
`;const o=t.div`
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  .ant-typography {
    color: white;
    font-weight: 800px;
    font-size: 32px;
    line-height: 39px;
    margin: 127px 0 82px 0;
  }
`;t(x)`
  margin: -103px 0 117px;
  height: 1382px;
  width: 1200px;
  min-height: 500px;
  background: #fbfdff;
`;const f=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`,m=t.div`
  height: 1px;
  background-color: ${i=>i.lineColor?i.lineColor:" #000000"};
  width: ${i=>i.lineWidth?i.lineWidth:"100%"};
`;t.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  justify-content: center;
`;const u=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 293px;
  width: 210px;
  top: 1363 px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 1px rgba(102, 120, 166, 0.03), 0px 5px 9px -3px rgba(102, 120, 166, 0.05);
  border-radius: 4px;
  margin-right: 38px;
  margin-top: 82px;
  margin-bottom: 155px;
  padding: 25px 20px;

  position: relative;
  border: 1px solid rgba(102, 120, 166, 0);
  img {
    width: 158px;
    height: 180px;
    padding-bottom: 20px;
  }
  .principalName {
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    box-sizing: border-box;
    padding-bottom: 8px;
  }
  .introduction {
    justify-content: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`,b="/assets/home-f3276ac8.jpg",j="/assets/home_introduction-63edf57e.png",y=t.div`
  /* overflow-x: hidden; */
`,v=t.div`
  height: 1029px;
  background-image: url(${b});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
`,w=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  flex-direction: column;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(11, 90, 150, 0.9) 1.04%,
    rgba(6, 111, 192, 0.7) 45.31%,
    rgba(222, 233, 95, 0) 100%
  );
  background-blend-mode: saturation;
  .title {
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    padding: 0 0 27px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .introduction {
    font-weight: 800;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
    padding: 21px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`,k=t(u)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`,a=t.div`
  height: 1029px;
  background-image: url(${i=>i.imgUrl?i.imgUrl:j});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,s=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  color: white;
  margin: 0 400px 116px;
`,{Title:r}=d;function P(){return p(),l.useState({id:"",status:!1}),e.jsxs(y,{children:[e.jsx(v,{children:e.jsxs(w,{children:[e.jsx("div",{className:"title",children:"แปล รัก ฉัน ด้วย ใจ เธอ"}),e.jsx(m,{lineColor:"#FFFFFF",lineWidth:"20%"}),e.jsx("div",{className:"introduction",children:"I told sunset about you......"})]})}),e.jsx(o,{children:e.jsx(r,{level:1,children:"actor introduction"})}),e.jsx(f,{children:h.map(i=>e.jsxs(k,{children:[e.jsx("img",{src:i.image,alt:"",style:{height:"90%"}}),e.jsx("div",{className:"principalName",children:i.name}),e.jsx("div",{className:"introduction",children:i.role})]},i.id))}),e.jsxs(a,{children:[e.jsx(o,{children:e.jsx(r,{level:1,style:{margin:"0",paddingTop:"86px",paddingBottom:"73px"},children:"TV's introduction"})}),e.jsx(s,{children:"导演: 纳卢拜·库诺 编剧: 纳卢拜·库诺 / Naron Cherdsoongnern / Karakade Norasethaporn 主演: 普提蓬·阿萨拉塔纳功 / 克里特·安努艾德奇康 / 纳特·奇查理 / 朋抔·潘亚密特 / 吉拉宇·考拜迈 / 更多... 类型: 剧情 / 爱情 / 同性 官方网站: tv.line.me/bkpptheseries 制片国家/地区: 泰国 语言: 泰语 / 汉语普通话 首播: 2020-10-22(泰国) 季数: 1 集数: 5 单集片长: 60分钟 又名: 一心一译 / 请用一心爱我 / 君心释爱 / I Told Sunset About You / BKPP The Series"})]}),e.jsx(o,{children:e.jsx(r,{level:1,style:{margin:"126px 0 59px 0"},children:"theme song:กีดกัน (Skyline)"})}),e.jsxs(a,{imgUrl:c,children:[e.jsx(o,{children:e.jsx(r,{level:1,style:{margin:"126px 0 59px 0"},children:"theme song:กีดกัน (Skyline)"})}),e.jsx(s,{children:"作词 : Thitiwat Rongthong/Puntapol Prasarnrajkit 作曲 : Thitiwat Rongthong/Puntapol Prasarnrajkit ใครเล่าเลยจะรู้ว่าความรัก 是谁说的懂得爱情 แม้แรกเจอต่างคนไม่รู้จัก 即使是初见 彼此素不相识 แต่ปักใจเพียงครั้งเดียว 但仅深信这一回 ติดในใจชั่วกาล 便永远缠绕心间 ยามที่เราทั้งสองได้พานพบ 当我们相遇之时 ลบเรื่องราวอดีตที่ร้าวราน 忘记了世间过去的纷扰 เธอคือความรักแท้ที่ฉันหามาเนิ่นนาน 你是我追寻已久的真爱 แต่ความรักดูเหมือนเลือนรางปลายทางไม่เป็นดังใจ 但爱情好似到达不了的远方 触不可及 ถ้าจะให้เราพบกันไยต้องกีดกั้นเราให้ไกล 若要让我们相遇 为何要阻拦我们靠近 กีดกั้นด้วยแผ่นฟ้าแม้ไกลฉันยินดีจะฝ่าไป 即使天违人愿 相隔万里 我也愿前行 กีดกั้นด้วยภูผาสูงชันลับตาฉันไม่หวั่นไหว 即使山高水远 遥望无边 我亦不动摇 กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待 แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗 ในตอนจบสุดท้ายนิยายรัก 在爱情小说的结局 มักให้คนห่างไกลได้ย้อนกลับ 常让相隔遥远的人重聚 กลับมาเพื่อพบเจอ 回来只为相见 บอกรักเธออีกครั้ง 再说一次爱你 แต่ความจริงของฉันรักเราคงเป็นไปดังนั้นไม่ได้ 而我的世界里 我们的爱也许无法像小说那样 พยายามแค่ไหนไม่มีทางใดที่เราจะใกล้กัน 再怎么努力 我们也无法靠近彼此 กีดกั้นด้วยแผ่นฟ้าแม้ไกลฉันยินดีจะฝ่าไป 即使天违人愿 相隔万里 我也愿前行 กีดกั้นด้วยภูผาสูงชันลับตาฉันไม่หวั่นไหว 即使山高水远 遥望无边 我亦不动摇 กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待 แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗 กีดกั้นด้วยแผ่นฟ้าแม้ไกลฉันยินดีจะฝ่าไป 即使天违人愿 相隔万里 我也愿前行 กีดกั้นด้วยภูผาสูงชันลับตาฉันไม่หวั่นไหว 即使山高水远 遥望无边 我亦不动摇 กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待 แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗 กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待 แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗"})]})]})}export{P as default};
