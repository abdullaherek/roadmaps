import React, { useState } from "react";
import Image from "next/image";
import * as Style from "./style";

const defaultForm = { title: " ", desc: " " };

function Form() {
  const [forms, setForms] = useState({
    1: defaultForm,
  });
  const [head, setHead] = useState();
  const componentCountArray = Object.keys(forms);
  function addComponent() {
    const newCount = Object.keys(forms).length + 1;

    setForms({
      ...forms,
      [newCount]: defaultForm,
    });
  }

  function deleteComponent() {}

  const handleChangeHead = (e) => {
    setHead(e.target.value);
  };
  const handleChange = (e, key) => {
    setForms({
      ...forms,
      [key]: {
        ...forms[key],
        [e.target.name]: e.target.value,
      },
    });
  };

  const add = async ({ forms }) => {
    const data = await fetch("http://localhost:3000/api/form", {
      method: "POST",
      body: JSON.stringify([
        {
          forms: [forms],
          head: head,
        },
      ]),
    });
    setForms({
      0: defaultForm,
    });
    setHead("");
  };

  return (
    <Style.Main>
      <Style.FormGroup>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Style.Title
            type="text"
            name="head"
            placeholder="Road Map Head"
            value={head}
            onChange={(e) => handleChangeHead(e)}
          ></Style.Title>
        </div>

        {componentCountArray.map((key) => (
          <>
            <Style.ComponentCount>
              <Style.IncrementButton onClick={addComponent}>
                <Image
                  src="/increment.svg"
                  alt="Increment Icon"
                  width={62}
                  height={62}
                />
              </Style.IncrementButton>
              <Style.Title
                type="text"
                name="title"
                placeholder="Title.."
                onChange={(e) => handleChange(e, key)}
              ></Style.Title>
              <Style.Desc
                type="text"
                name="desc"
                placeholder="Description.."
                onChange={(e) => handleChange(e, key)}
              ></Style.Desc>
          
              <Style.IncrementButton onClick={deleteComponent}>
                <Image
                  src="/trash.svg"
                  alt="Trash Icon"
                  width={32}
                  height={32}
                />
              </Style.IncrementButton>
            </Style.ComponentCount>
          </>
        ))}
        <Style.ButtonDiv>
          <Style.Button primary onClick={() => add({ forms })}>
            Veri tabanina ekle
          </Style.Button>
        </Style.ButtonDiv>
      </Style.FormGroup>
    </Style.Main>
  );
}

export default Form;
