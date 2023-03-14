import {decode} from 'js-base64';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {CommonPage} from '@/component/UI/CommonPage';
import {CardWrap, ContentWrap, UnderLineWrap} from '@/style/styles';

const baseUrl = `https://api.github.com/repos/tninenine/fetch-markdown/contents`; //https://api.github.com/repos/{owner}/{repo}/contents/ default master
export default function MonthlyReport() {
  const [html, setMarkdown] = React.useState({__htmlA: '', __htmlB: ''});
  const getMarkdown = async () => {
    try {
      const [a, b] = await Promise.all([
        await (await fetch(`${baseUrl}/testA.md`)).json(),
        await (await fetch(`${baseUrl}/testB.md`)).json(),
      ]);
      setMarkdown({__htmlA: decode(a.content), __htmlB: decode(b.content)});
    } catch (error) {
      setMarkdown({__htmlA: '', __htmlB: ''});
    }
  };
  React.useEffect(() => {
    getMarkdown();
  }, []);
  return (
    <CommonPage initTitleOn={false}>
      <CardWrap style={{minHeight: '300px', height: '100%'}}>
        <ContentWrap
          style={{
            padding: '77px 5% 0',
            color: '#005a9f',
            fontWeight: '800px',
            fontSize: '32px',
          }}
        >
          张三的月报（正文为markdown测试文本）
        </ContentWrap>
        <div style={{padding: '20px 5%'}}>
          <UnderLineWrap lineColor="#D6D6D6" />
        </div>
        <ContentWrap style={{padding: '0 5%'}}>
          <ReactMarkdown children={html.__htmlA} remarkPlugins={[remarkGfm]} />
        </ContentWrap>
        <ContentWrap
          style={{
            padding: '77px 5% 0',
            color: '#005a9f',
            fontWeight: '800px',
            fontSize: '32px',
          }}
        >
          李四的月报
        </ContentWrap>
        <div style={{padding: '20px 5%'}}>
          <UnderLineWrap lineColor="#D6D6D6" />
        </div>
        <ContentWrap style={{padding: '0 5%'}}>
          <ReactMarkdown children={html.__htmlB} remarkPlugins={[remarkGfm]} />
        </ContentWrap>
      </CardWrap>
    </CommonPage>
  );
}
