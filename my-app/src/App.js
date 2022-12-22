import './index.css';
import Modal from "./components/Modal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";



function App() {




    return (
      <>
            <button onClick={open}> click </button>

            {stateMod1 &&
                <Modal>Text</Modal>
            }
      </>
    );
}

export default App;
