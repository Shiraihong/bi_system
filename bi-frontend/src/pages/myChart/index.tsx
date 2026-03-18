import {Avatar, Button, Card, Col, Divider, Form, Input, List, message, Row, Select, Space, Spin, Upload} from 'antd';
import React, {useEffect, useState} from 'react';
import {listMyChartByPageUsingPost} from "@/services/bi/chartController";
import ReactECharts from "echarts-for-react";
import {useModel} from "@umijs/max";
import Search from "antd/es/input/Search";

/**
 * 我的图表页面
 * @constructor
 */
const MyChartPage: React.FC = () => {

  const initSearchParams = {
    current: 1,
    pageSize: 4,
  }

  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({
    ...initSearchParams
  })
  const [chartList, setChartList] = useState<API.Chart[]>();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await listMyChartByPageUsingPost(searchParams);
      if (res.data) {
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
        //hide title
        if (res.data.records) {
          res.data.records.forEach(data => {
            const chartOption = JSON.parse(data.genChart ?? '{}');
            chartOption.title = undefined;
            data.genChart = JSON.stringify(chartOption);
          })
        }
      } else {
        message.error('获取我的图表失败');
      }

    } catch (e: any) {
      message.error('获取我的图表失败' + e.message());
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData()
  }, [searchParams]);

  return (
    <div className="my-chart-page">
      <div>
        <Search placeholder="请输入图表名称" enterButton loading={loading} onSearch={(value) => {
          // 设置搜索条件
          setSearchParams({
            ...initSearchParams,
            name: value,
          })
        }}/>
      </div>
      <div className="margin-16"/>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page, pageSize) => {
            setSearchParams({
              ...searchParams,
              current: page,
              pageSize
            })
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: total
        }}
        dataSource={chartList}
        renderItem={item => (
          <List.Item
            key={item.id}
          >
            <Card>
              <List.Item.Meta
                title={item.name}
                description={item.chartType ? ('图表类型: ' + item.chartType) : undefined}
              />
              {'分析目标: ' + item.goal}
              <ReactECharts option={JSON.parse(item.genChart ?? '{}')}/>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MyChartPage;
