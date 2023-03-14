import {Typography, Space, theme} from 'antd';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';

import theme_song from '@/assets/images/theme_song.jpg';

const {Title} = Typography;
import principals from '@/constants/principals';
import {ListItem, TitleWrap, FlexWrap, ContentWrap, UnderLineWrap} from '@/style/styles';

import {
  HomeWrap,
  ImageWrap,
  HomePrincipalBox,
  ProjectWrap,
  ProjectContentWrap,
  ShadowWrap,
} from './styles';

export default function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState({id: '', status: false});
  return (
    <HomeWrap>
      <ImageWrap>
        <ShadowWrap>
          <div className="title">แปล รัก ฉัน ด้วย ใจ เธอ</div>
          <UnderLineWrap lineColor="#FFFFFF" lineWidth="20%" />
          <div className="introduction">I told sunset about you......</div>
        </ShadowWrap>
      </ImageWrap>
      <TitleWrap>
        <Title level={1}>actor introduction</Title>
      </TitleWrap>
      <FlexWrap>
        {principals.map((item) => (
          <HomePrincipalBox key={item.id}>
            <img src={item.image} alt="" style={{height: '90%'}} />
            <div className="principalName">{item.name}</div>
            <div className="introduction">{item.role}</div>
          </HomePrincipalBox>
        ))}
      </FlexWrap>
      <ProjectWrap>
        <TitleWrap>
          <Title level={1} style={{margin: '0', paddingTop: '86px', paddingBottom: '73px'}}>
            TV's introduction
          </Title>
        </TitleWrap>
        <ProjectContentWrap>
          导演: 纳卢拜·库诺 编剧: 纳卢拜·库诺 / Naron Cherdsoongnern / Karakade Norasethaporn 主演:
          普提蓬·阿萨拉塔纳功 / 克里特·安努艾德奇康 / 纳特·奇查理 / 朋抔·潘亚密特 / 吉拉宇·考拜迈 /
          更多... 类型: 剧情 / 爱情 / 同性 官方网站: tv.line.me/bkpptheseries 制片国家/地区: 泰国
          语言: 泰语 / 汉语普通话 首播: 2020-10-22(泰国) 季数: 1 集数: 5 单集片长: 60分钟 又名:
          一心一译 / 请用一心爱我 / 君心释爱 / I Told Sunset About You / BKPP The Series
        </ProjectContentWrap>
      </ProjectWrap>
      <TitleWrap>
        <Title level={1} style={{margin: '126px 0 59px 0'}}>
          theme song:กีดกัน (Skyline)
        </Title>
      </TitleWrap>
      <ProjectWrap imgUrl={theme_song}>
        <TitleWrap>
          <Title level={1} style={{margin: '126px 0 59px 0'}}>
            theme song:กีดกัน (Skyline)
          </Title>
        </TitleWrap>
        <ProjectContentWrap>
          作词 : Thitiwat Rongthong/Puntapol Prasarnrajkit 作曲 : Thitiwat Rongthong/Puntapol
          Prasarnrajkit ใครเล่าเลยจะรู้ว่าความรัก 是谁说的懂得爱情 แม้แรกเจอต่างคนไม่รู้จัก
          即使是初见 彼此素不相识 แต่ปักใจเพียงครั้งเดียว 但仅深信这一回 ติดในใจชั่วกาล
          便永远缠绕心间 ยามที่เราทั้งสองได้พานพบ 当我们相遇之时 ลบเรื่องราวอดีตที่ร้าวราน
          忘记了世间过去的纷扰 เธอคือความรักแท้ที่ฉันหามาเนิ่นนาน 你是我追寻已久的真爱
          แต่ความรักดูเหมือนเลือนรางปลายทางไม่เป็นดังใจ 但爱情好似到达不了的远方 触不可及
          ถ้าจะให้เราพบกันไยต้องกีดกั้นเราให้ไกล 若要让我们相遇 为何要阻拦我们靠近
          กีดกั้นด้วยแผ่นฟ้าแม้ไกลฉันยินดีจะฝ่าไป 即使天违人愿 相隔万里 我也愿前行
          กีดกั้นด้วยภูผาสูงชันลับตาฉันไม่หวั่นไหว 即使山高水远 遥望无边 我亦不动摇
          กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待
          แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗
          ในตอนจบสุดท้ายนิยายรัก 在爱情小说的结局 มักให้คนห่างไกลได้ย้อนกลับ 常让相隔遥远的人重聚
          กลับมาเพื่อพบเจอ 回来只为相见 บอกรักเธออีกครั้ง 再说一次爱你
          แต่ความจริงของฉันรักเราคงเป็นไปดังนั้นไม่ได้ 而我的世界里 我们的爱也许无法像小说那样
          พยายามแค่ไหนไม่มีทางใดที่เราจะใกล้กัน 再怎么努力 我们也无法靠近彼此
          กีดกั้นด้วยแผ่นฟ้าแม้ไกลฉันยินดีจะฝ่าไป 即使天违人愿 相隔万里 我也愿前行
          กีดกั้นด้วยภูผาสูงชันลับตาฉันไม่หวั่นไหว 即使山高水远 遥望无边 我亦不动摇
          กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待
          แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗
          กีดกั้นด้วยแผ่นฟ้าแม้ไกลฉันยินดีจะฝ่าไป 即使天违人愿 相隔万里 我也愿前行
          กีดกั้นด้วยภูผาสูงชันลับตาฉันไม่หวั่นไหว 即使山高水远 遥望无边 我亦不动摇
          กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待
          แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗
          กีดกันด้วยเวลาฉันยินดีรอ 即使时间阻拦 我也愿等待
          แต่กีดกั้นด้วยชะตาฉันคงต้องยอมพ่ายแพ้ใช่ไหม 可命运捉弄 我就得认输是吗 ใช่ไหม 是吗
        </ProjectContentWrap>
      </ProjectWrap>
    </HomeWrap>
  );
}
