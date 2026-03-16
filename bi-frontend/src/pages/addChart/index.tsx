import {
  UploadOutlined,
} from '@ant-design/icons';
import {Alert, App, Button, Card, Col, Divider, Form, Input, message, Row, Select, Tabs, Upload} from 'antd';
import React, { useEffect, useState } from 'react';
import TextArea from "antd/es/input/TextArea";
import { genChartByAiUsingPost } from "@/services/bi/chartController";
import { undefined } from "@umijs/utils/compiled/zod";
import ReactECharts from 'echarts-for-react';

const AddChart: React.FC = () => {

  const [chart, setChart] = useState<API.BiResponse>();
  const [chartOption, setChartOption] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const params = {
      ...values,
      file: undefined
    }

    try {
      const res = await genChartByAiUsingPost(params, {}, values.file.file.originFileObj);
      if (!res?.data) {
        message.error('分析失败');
      } else {
        message.success('分析成功');
        const chartOption = JSON.parse(res.data.genChart ?? '');
        if (!chartOption) {
          throw new Error('解析失败');
        } else {
          setChart(res.data);
          setChartOption(chartOption);
        }
      }
    } catch (e: any) {
      message.error('分析失败' + e.message);
    }
    setLoading(false);
  };
  return (
    <div className="add_chart">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="智能分析">
            <Form
              name="addChart"
              labelAlign="left"
              labelCol={{span: 4}}
              wrapperCol={{span: 16}}
              onFinish={onFinish}
              initialValues={{}}
            >
              <Form.Item name="goal" label="分析目标" rules={[{ required: true, message: '请输入分析目标' }]}>
                <TextArea placeholder="请输入分析需求， 比如：分析网站用户的增长情况" />
              </Form.Item>
              <Form.Item name="name" label="图表名称">
                <Input placeholder="请输入图表名称" />
              </Form.Item>
              <Form.Item
                name="chartType"
                label="图表类型"
                rules={[{ required: true, message: 'Please select your country!' }]}
              >
                <Select
                  options={[
                    { value: '折线图', label: '折线图' },
                    { value: '柱状图', label: '柱状图' },
                    { value: '堆叠图', label: '堆叠图' },
                    { value: '饼图', label: '饼图' },
                    { value: '雷达图', label: '雷达图' },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="file"
                label="原始数据"
              >
                <Upload name="file" maxCount={1}>
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 120, offset: 4 }}>
                <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
                  Submit
                </Button>
                <Button htmlType="reset" style={{ marginLeft: 10 }}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="分析结论">
            {chart?.genResult ?? <div>请先在左侧进行提交</div>}
          </Card>
          <Divider />
          <Card title="可视化图表">
            {chartOption ? <ReactECharts option={chartOption} /> : <div>请先在左侧进行提交</div>}
          </Card>
        </Col>
      </Row>

    </div>
  );
};
export default AddChart;
