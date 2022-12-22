import './index.css';
import Modal from "./components/Modal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";



function App() {

    const dispatch = useDispatch();
    const stateMod1 = useSelector(state => state.stateMod1);

    const open = () => {
      dispatch({type:"Open__MOD", payload:!stateMod1})
    }


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
