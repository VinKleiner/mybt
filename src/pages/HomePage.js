import {useState} from "react";


const HomePage = () => {
    //ми робимо спеціальний state  - який зберігає інформацію
    //ми створили змінну count, яка зберігає 0
    //setCount - це спеціальна змінна, для зміни count
    //якщо ми скликаємо seCount, то відбуваєжться Render - компонента
    const [count, setCount] = useState(0);
    const onHandlePlusClick = () => {
        setCount(count + 1); // Будемо збільшувати значення count+1
    }
    const onHandleMinusClick = () => {
        setCount(count -1); // Будемо збільшувати значення count+1
    }
    return (
        <>
            <h1 className="text-center">Привіт команада :)</h1>
            <div className="alert alert-success">
                Кількість елементів {count}
            </div>
            <button className="btn btn-success" onClick={onHandlePlusClick}>
                змінити кількість на +1
            </button>
            <button className="btn btn-danger" onClick={onHandleMinusClick}>
                змінити кількість на -1
            </button>
        </>
    )
}

export default HomePage;