const List = () => {
    const itms = [{
        id: 1,
        name: "Matheus",
    },
    {
        id: 2,
        name: "João",
    },
    {
        id: 3,
        name: "Pedro",
    },];
    return (
    <div>
        {DataTransferItemList.map((item) => (
            <p>{item.name}</p>
        ))}
    </div>
    );
};

export default List;