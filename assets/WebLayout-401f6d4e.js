import{W as p,j as e,L as l,p as x,u as h,a as g,O as u}from"./main-26e121a8.js";import{r as m}from"./react-f0d12c14.js";import{s as n}from"./styled-components.browser.esm-49ceb9e0.js";import{L as o,M as b,b as y,S as f}from"./antd-3c331411.js";const j="/assets/logo-04e4a5ad.png",{Content:k,Header:L}=o,C=e.jsx(y,{style:{fontSize:24},spin:!0}),W=n(f)`
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=n.div`
  box-shadow: 0px 1px 10px rgba(71, 90, 155, 0.02), 0px 4px 6px rgba(102, 120, 166, 0.04),
    0px 2px 6px -1px rgba(102, 120, 166, 0.05);
  position: fixed;
  top: 0;
  background: #080808;
  width: 100%;
  height: 80px;
  padding: 14px 20px;
  z-index: 10;
`,z=n(L)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #080808 !important;
  padding-inline: 0 !important;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  .ant-menu-dark {
    background: #080808;
  }
  .ant-menu-dark .ant-menu-item-selected a {
    color: #005a9f;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
`,w=n(k)`
  padding: 80px 0;
`,S=n.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 108px;
`,a=n(o)`
  width: 100%;
  header,
  footer,
  main {
    width: 100%;
    margin: 0 auto;
  }
`,R=()=>{var i,r;const s=((i=p.find(t=>t.path==="/"))==null?void 0:i.children).map(t=>({key:t.path,label:e.jsx(l,{to:t.path,children:x[t.id]})})),d=h(),c=g();return e.jsxs(o,{style:{background:"black"},children:[e.jsx(a,{style:{background:"#080808"},children:e.jsx(v,{children:e.jsxs(z,{children:[e.jsx("div",{style:{height:"60px",display:"flex",alignItems:"center",paddingLeft:"24px"},children:e.jsx("img",{src:j,style:{height:"52px"},onClick:()=>d("/")})}),e.jsx(b,{theme:"dark",mode:"horizontal",selectedKeys:[((r=s.find(t=>t.key!=="/"&&c.pathname.includes(t.key)))==null?void 0:r.key)||"/"],items:s})]})})}),e.jsx(a,{style:{background:"#080808"},children:e.jsx(w,{children:e.jsx(m.Suspense,{fallback:e.jsx(W,{indicator:C,delay:1e3}),children:e.jsx(u,{})})})}),e.jsx(a,{style:{background:"#080808"},children:e.jsx(S,{})})]})};export{W as LoadingWrap,R as default};
