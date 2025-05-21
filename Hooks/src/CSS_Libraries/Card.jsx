import { Avatar, Card } from "antd"

const { Meta } = Card;

const Cards = () => {
    console.log("Ads")
    return (
        <>
            <Card title="Sample Card" style={{ width: 300 }} cover={<img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />}
                actions={["Edit", "Delete"]}
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </>
    )
}

export default Cards