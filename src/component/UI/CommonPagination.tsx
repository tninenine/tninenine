import {Pagination} from 'antd';
import React from 'react';
import styled from 'styled-components';

type CommonPaginationProps = {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
  style?: React.CSSProperties;
};

const PagInationWrap = styled(Pagination)`
  position: absolute;
  bottom: 0;
  padding-bottom: 98px;
  .ant-pagination-item {
    background: #ffffff;
    border-radius: 3px;
    min-width: 32px;
    height: 32px;
    a {
      background: #ffffff;
      color: #424355;
    }
  }
  .ant-pagination-item-active {
    a {
      background: #005a9f;
      color: #ffffff;
    }
  }
  .ant-pagination-item-link {
    border: none;
  }
`;

function CommonPagination({current, pageSize, total, onChange, style}: CommonPaginationProps) {
  return (
    <PagInationWrap
      current={current}
      pageSize={pageSize}
      onChange={onChange}
      total={total}
      showSizeChanger={false}
      hideOnSinglePage={true}
      style={style}
    />
  );
}

export {CommonPagination};
