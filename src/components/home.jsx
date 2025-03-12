import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState([{ name: 'Ahmed', phone: '0110', email: 'Ahmed@gmail.com', imgLink: "data:image/jpeg;base64,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" }]);
    const [data, setData] = useState([]);

    const getname = (e) => {
        setName(e.target.value)
        setEmail(e.target.value.split(" ")[0] + "@gmail.com");

    };
    const getphone = (e) => setPhone(e.target.value);
    const getimgLink = (e) => setImgLink(e.target.value);

    const submit = () => {
        if (!name || !phone || !imgLink) {
            return alert("Please enter");
        }
        const newItem = { name, phone, email, imgLink };
        setData([...data, newItem]);
        console.log(imgLink);
        setSearch([...data, newItem])
        setName("")
        setPhone("")
        setImgLink("")
        setEmail("");

    };
    const deleteAll = () => {
        setData([]);
        setSearch([]);
    }
    const deleteTask = (index) => {
        setData(data.filter((_, i) => {
            console.log("delete");
            return i != index;
        }))
        setSearch(data.filter((_, i) => {
            console.log("delete");
            return i != index;
        }))
    }
    const searchByName = (e) => {
        setSearch(data.filter((item) => {
            if (item.name.toUpperCase().includes(e.target.value.toUpperCase()))
                return item;
        }))
    }
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4 text-primary fw-bold "> Add Contact</h1>
                <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center ">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => getname(e)}
                        placeholder="Enter name"
                        className="form-control w-25 shadow-sm border-primary" />
                    <input
                        type="number"
                        value={phone}
                        onChange={(e) => getphone(e)}
                        placeholder="Enter phone"
                        className="form-control w-25 shadow-sm border-primary" />
                    <input
                        type="text"
                        value={imgLink}
                        onChange={(e) => getimgLink(e)}
                        placeholder="Enter image link"
                        className="form-control w-25 shadow-sm border-primary" />
                    <button className="btn btn-primary px-4 shadow-lg fw-bold" onClick={submit}>
                        ➕ Add
                    </button>
                    <button className="btn btn-danger px-4 shadow-lg fw-bold" onClick={deleteAll}>
                        Delete All
                    </button>
                </div>

                <div className="text-center mt-4 text-primary fw-bold ">
                    <input
                        type="text"
                        onChange={(e) => {
                            console.log(data);
                            searchByName(e)
                        }}
                        placeholder="search"
                        className="form-control w-50 shadow-sm border-primary" />
                </div>

                <div className="table-responsive mt-4 text-center">
                    <table className="table table-striped table-bordered shadow-sm">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col"> Name</th>
                                <th scope="col"> Phone</th>
                                <th scope="col"> Email</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                search.length ? search.map((item, index) =>
                                    <tr key={index} className="align-middle">
                                        <td> <img src={item.imgLink} width="50px" height="50px" className="rounded-circle " /> {item.name}</td>
                                        <td>{item.phone}</td>
                                        <td style={{ color: 'blue' }}>{item.email} </td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            deleteTask(index);
                                        }}>delete</button></td>
                                    </tr>
                                ) : <tr>
                                    <td>No found</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default Home;
