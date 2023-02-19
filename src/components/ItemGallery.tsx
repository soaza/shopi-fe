import { Button, Card, Col, Row, Switch } from "antd";
import { useEffect, useState } from "react";

export const ItemGallery = () => {
  useEffect(() => {
    const fetchItems = async () => {
      const rawResponse = await fetch("http://localhost:5000/getItems", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const res = await rawResponse.json();

      setItems(res.items);
    };

    fetchItems();
  }, []);
  const [items, setItems] = useState<number[]>([]);

  return (
    <div>
      <Row style={{ width: "100%" }} gutter={16}>
        {items.map((item: any, index) => {
          return (
            <Col span={8}>
              <Switch
                onClick={(val) => {
                  if (val) {
                    setItems((items) => [...items, index]);
                  } else {
                    setItems((items) => items.filter((i) => i !== index));
                  }
                }}
              />
              <Card title={item.name} bordered={false}>
                {item.price}
              </Card>
            </Col>
          );
        })}
      </Row>

      <Button type="primary" style={{ marginTop: 16 }}>
        Checkout
      </Button>
    </div>
  );
};
